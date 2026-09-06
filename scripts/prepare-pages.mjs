import {cpSync,existsSync,mkdirSync,readFileSync,readdirSync,rmSync,writeFileSync} from 'node:fs';
import {join} from 'node:path';
const source='dist/client';
if(!existsSync(join(source,'index.html'))) throw new Error('Missing exported index.html');
rmSync('docs',{recursive:true,force:true});
mkdirSync('docs');
for(const entry of readdirSync(source)){
 if(entry.startsWith('.')||entry==='vinext-client-entry-manifest.json') continue;
 if(entry==='osaka-trip') {for(const child of readdirSync(join(source,entry))) cpSync(join(source,entry,child),join('docs',child),{recursive:true});}
 else cpSync(join(source,entry),join('docs',entry),{recursive:true});
}
writeFileSync('docs/.nojekyll','');
const html=readFileSync('docs/index.html','utf8');
for(const [,url] of html.matchAll(/(?:src|href)="(\/osaka-trip\/[^"#?]+)"/g)){
 const file=join('docs',url.replace('/osaka-trip/',''));
 if(!existsSync(file)) throw new Error(`Missing asset: ${file}`);
}
console.log('GitHub Pages files prepared; all HTML asset references resolve.');
