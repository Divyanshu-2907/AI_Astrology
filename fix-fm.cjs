const fs = require('fs'); 
const path = require('path'); 
const dirs = ['src/content/blog/en', 'src/content/blog/hi']; 
const files = ['how-to-read-birth-chart.md', 'rahu-ketu-guide.md', 'understanding-12-houses.md', 'venus-sign-love-life.md']; 
dirs.forEach(dir => {
  files.forEach(file => { 
    const p = path.join(dir, file); 
    let content = fs.readFileSync(p, 'utf8'); 
    content = content.replace(/date: .*/, 'pubDate: 2026-08-01'); 
    content = content.replace(/tags: .*\n/, ''); 
    content = content.replace(/image: .*\n/, ''); 
    const lang = dir.endsWith('en') ? 'en' : 'hi'; 
    content = content.replace(/author: .*\n/, 'author: "AI Astrology"\nlang: "' + lang + '"\n'); 
    fs.writeFileSync(p, content); 
  });
}); 
console.log('Fixed frontmatter');
