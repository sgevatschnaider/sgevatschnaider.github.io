import fs from 'node:fs';
import path from 'node:path';
import {load} from 'cheerio';
import {entries} from './catalog.mjs';

// One-time, reviewable import of the author's existing English editions.
// The raw feed is supplied explicitly and is never committed.
const ROOT=path.resolve(import.meta.dirname,'..');
const feed=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
const fallback={
 alphaevolve:'creatividad-computacional-y-alphaevolve.html',
 huginn:'huginn-razonamiento-latente-root_27.html',
 'armonia-hardware':'armonia-y-hardware-el-camino-chino_3.html',
 bitcoin:'bitcoin-como-activo-de-reserva-y.html',
 'memecoins-psicologia':'memecoins-la-psicologia-de-la-coleccion.html',
 sinogramas:'cuando-el-lenguaje-es-un-imagen.html'
};
const provenance={};
for(const [id,source] of entries.slice(3)){
 const md=fs.readFileSync(path.join(ROOT,source),'utf8');
 const link=md.split('\n').find(l=>/english|ingl[eé]s/i.test(l)&&/blogspot/.test(l))?.match(/https:\/\/economiayetica\.blogspot\.com\/[^\s)]+/)?.[0];
 const post=feed.find(e=>e.link.some(l=>l.rel==='alternate'&&(l.href===link||fallback[id]&&l.href.endsWith('/'+fallback[id]))));
 if(!post)throw Error('Missing English source: '+id);
 const url=post.link.find(l=>l.rel==='alternate').href;
 const $=load(post.content.$t);
 let root=$('#content-en').first(),selector='#content-en';
 if(!root.length){root=$('.english').first();selector='.english'}
 if(!root.length){root=$('body');selector='body'}
 const selected=root.clone();
 selected.find('script,style,button,input,select,nav,iframe,canvas,.controls,.controls-container,.language-switch,.theme-toggle').remove();
 // Images shared by both language versions sit outside the selected article.
 const shared=[];
 if(selector!=='body')$('img').each((_,img)=>{if(!$(img).closest('#content-es,#content-en,.english,.spanish').length)shared.push($.html(img))});
 selected.find('[hidden]').removeAttr('hidden');
 selected.find('*').each((_,el)=>{
  for(const a of Object.keys(el.attribs||{}))if(/^on/i.test(a)||a==='style')$(el).removeAttr(a);
  for(const a of ['href','src']){const v=$(el).attr(a);if(v&&!v.startsWith('#'))try{$(el).attr(a,new URL(v,url).href)}catch{$(el).removeAttr(a)}}
 });
 const html=shared.join('\n')+'\n'+selected.html();
 if(selected.text().trim().length<1500)throw Error('Unexpectedly short English source: '+id);
 fs.mkdirSync(path.join(ROOT,'content/en'),{recursive:true});
 fs.writeFileSync(path.join(ROOT,'content/en',id+'.html'),html.trim()+'\n');
 provenance[id]={url,published:post.published.$t.slice(0,10),selector,characters:selected.text().trim().length,headingCount:selected.find('h1,h2,h3,h4').length};
 console.log(id,provenance[id].characters,provenance[id].headingCount);
}
fs.mkdirSync(path.join(ROOT,'data'),{recursive:true});
fs.writeFileSync(path.join(ROOT,'data/article-provenance.json'),JSON.stringify(provenance,null,2)+'\n');
