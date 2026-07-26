import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        if (isDirectory) {
            walkDir(dirPath, callback);
        } else {
            callback(dirPath);
        }
    });
}

const dirsToSearch = ['src', 'public', '.'];
const extensions = ['.astro', '.ts', '.mjs', '.txt', '.json', '.js'];

dirsToSearch.forEach(dir => {
    if (dir === '.') {
        // Special case for root directory files
        ['astro.config.mjs', 'package.json'].forEach(file => {
            const filePath = path.join(process.cwd(), file);
            if (fs.existsSync(filePath)) {
                replaceInFile(filePath);
            }
        });
        return;
    }
    
    walkDir(path.join(process.cwd(), dir), (filePath) => {
        if (extensions.some(ext => filePath.endsWith(ext))) {
            replaceInFile(filePath);
        }
    });
});

function replaceInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    // Fix messed up URLs
    content = content.replace(/Free Astrology AI\.com/gi, 'freeastrologyai.com');
    content = content.replace(/Free Astrology AI\.app/gi, 'freeastrologyai.com');
    content = content.replace(/freeastrologyai\.com\.com/gi, 'freeastrologyai.com');
    
    // Check if there are things like support@Free Astrology AI.com
    content = content.replace(/support@Free Astrology AI/gi, 'support@freeastrologyai');
    
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Fixed URL in:', filePath);
    }
}
