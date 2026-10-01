import {load} from 'cheerio';
import katex from 'katex';
import {marked} from 'marked';

export const mathReport={rendered:0,errors:[]};
const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// Preserve TeX before Markdown consumes backslashes. Fenced/inline code stays code.
export function markdown(source){
 const math=[];
 const protectedSource=source.replace(/(```[\s\S]*?```|~~~[\s\S]*?~~~|`[^`\n]+`)|(\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)|(?<![\\\w])\$(?!\s)([^$\n]+?)\$(?!\d))/g,(all,code)=>{
  if(code)return all;
  // A currency pair such as $100 and $200 is not mathematical notation.
  if(/^\$\d/.test(all)&&!/[_^\\=+{}]/.test(all))return all;
  const display=all.startsWith('$$')||all.startsWith('\\[');
  const tex=all.slice(display||all.startsWith('\\(')?2:1,display||all.startsWith('\\(')?-2:-1);
  const i=math.push({tex,display})-1;return `SGMATHTOKEN${i}END`;
 });
 return marked.parse(protectedSource).replace(/SGMATHTOKEN(\d+)END/g,(_,i)=>`<sg-math data-display="${math[i].display}">${escape(math[i].tex)}</sg-math>`);
}
export function plain(html){const $=load(html);$('script,style').remove();return $('body').text().replace(/\s+/g,' ').trim()}
export function cleanArticle(html){
 const $=load(html,null,false);
 $('script,style,iframe,object,embed,form,input,select,button').remove();
 $('*').each((_,el)=>{
  for(const attr of Object.keys(el.attribs||{}))if(/^on/i.test(attr)||['style','hidden','srcdoc'].includes(attr))$(el).removeAttr(attr);
  for(const attr of ['href','src','xlink:href']){
   const value=$(el).attr(attr);
   if(value&&/^\s*(?:javascript|data|vbscript):/i.test(value))$(el).removeAttr(attr);
  }
 });
 // The portal owns its title and generated contents. Keep every article section.
 $('h1').first().remove();$('h1').each((_,el)=>{el.tagName='h2'});
 $('h2,h3').each((_,el)=>{
  if(/^(?:índice|table of contents|contents|index)$/i.test($(el).text().trim())){
   const list=$(el).next();if(list.is('ol,ul'))list.remove();$(el).remove();
  }
 });
 $('p').each((_,el)=>{if(/^(?:🌐\s*)?(?:Cambiar idioma|Idioma|Read in English|English version|Versión en inglés)\s*:/i.test($(el).text().trim()))$(el).remove()});
 $('pre,code').each((_,el)=>{if(!$(el).text().trim())$(el).remove()});
 $('a[target="_blank"]').attr('rel','noopener noreferrer');
 return $.html();
}
export function renderMath(html,file){
 const $=load(html,null,false);
 const render=(tex,display)=>{
  try{const result=katex.renderToString(tex.trim(),{displayMode:display,throwOnError:true,strict:'ignore',trust:false,output:'htmlAndMathml'});mathReport.rendered++;return result}
  catch(e){mathReport.errors.push({file,tex:tex.slice(0,300),error:e.message});return `<code class="math-error">${escape(tex)}</code>`}
 };
 $('sg-math').each((_,el)=>$(el).replaceWith(render($(el).text(),$(el).attr('data-display')==='true')));
 function walk(node){
  if(node.type==='text'){
   if(!/[\$]|\\[\[(]/.test(node.data))return;
   const re=/\$\$([\s\S]+?)\$\$|\\\[([\s\S]+?)\\\]|\\\(([\s\S]+?)\\\)|(?<![\\\w])\$(?!\s)([^$\n]+?)\$(?!\d)/g;
   const text=node.data;let cursor=0,parts=[],m;
   while((m=re.exec(text))){if(/^\$\d/.test(m[0])&&!/[_^\\=+{}]/.test(m[0]))continue;parts.push(escape(text.slice(cursor,m.index)),render(m[1]??m[2]??m[3]??m[4],m[1]!==undefined||m[2]!==undefined));cursor=re.lastIndex}
   if(parts.length){parts.push(escape(text.slice(cursor)));$(node).replaceWith(parts.join(''))}
  }else if(!['script','style','pre','code','annotation','math'].includes(node.tagName)&&!$(node).hasClass('katex'))for(const child of [...(node.children||[])])walk(child);
 }
 for(const node of [...$.root()[0].children])walk(node);
 return $.html();
}
