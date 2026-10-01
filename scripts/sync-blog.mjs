import fs from 'node:fs';
import path from 'node:path';
import {load} from 'cheerio';
const ROOT=path.resolve(import.meta.dirname,'..');
const destination=path.join(ROOT,'data/blog-notes.json');
try{
 const response=await fetch('https://economiayetica.blogspot.com/feeds/posts/default?alt=json&max-results=8',{signal:AbortSignal.timeout(20000)});
 if(!response.ok)throw Error('HTTP '+response.status);
 const feed=await response.json();
 const notes=(feed.feed?.entry||[]).flatMap(post=>{
  const url=post.link?.find(l=>l.rel==='alternate')?.href;
  if(!url||new URL(url).hostname!=='economiayetica.blogspot.com')return [];
  const $=load(post.content?.$t||'');
  $('script,style,nav,button').remove();
  let raw=post.title?.$t?.trim()||$('h1').first().text().trim()||$('title').text().trim();
  if(!raw)return [];
  const parts=raw.split(/\s*\/\s*/);
  const esRoot=$('#content-es,[data-lang="es"],section[class*="lang-es"],article[class*="lang-es"]').first();
  const enRoot=$('#content-en,[data-lang="en"],section[class*="lang-en"],article[class*="lang-en"]').first();
  const esTitle=parts[0]||esRoot.find('h1').first().text().trim();
  const enTitle=parts.slice(1).join(' / ')||enRoot.find('h1').first().text().trim()||null;
  const longParagraph=root=>root.find('p').filter((i,p)=>$(p).text().trim().length>80).first().text();
  const esText=longParagraph(esRoot)||longParagraph($('body'));
  const enText=longParagraph(enRoot);
  const compact=s=>{const text=s.replace(/\s+/g,' ').trim();return text.length<=190?text:text.slice(0,185).replace(/\s+\S*$/,'')+'…'};
  return [{url,date:post.published.$t.slice(0,10),esTitle:compact(esTitle),enTitle:enTitle?compact(enTitle):null,esSummary:compact(esText),enSummary:compact(enText)}];
 }).slice(0,4);
 if(notes.length<2)throw Error('Incomplete feed');
 fs.mkdirSync(path.dirname(destination),{recursive:true});
 fs.writeFileSync(destination,JSON.stringify(notes,null,2)+'\n');
 console.log('Blog snapshot refreshed: '+notes.length+' entries');
}catch(e){
 if(!fs.existsSync(destination))throw e;
 console.warn('Blog unavailable; retaining the published snapshot: '+e.message);
}
