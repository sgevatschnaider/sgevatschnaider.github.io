import fs from 'node:fs';import path from 'node:path';
const root=path.resolve(import.meta.dirname,'..'),out=path.join(root,'public');
if(!fs.existsSync(path.join(out,'es/index.html')))throw new Error('Build the portal before synchronising.');
for(const name of fs.readdirSync(out)){if(name==='assets')continue;fs.cpSync(path.join(out,name),path.join(root,name),{recursive:true})}
for(const name of ['catalog.json','social-cover.png','search-index.json','math-report.json'])fs.copyFileSync(path.join(out,'assets',name),path.join(root,'assets',name));
console.log('Generated pages synchronised into the GitHub Pages root.');
