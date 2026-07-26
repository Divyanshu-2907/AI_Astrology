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
    
    // Replace "Free Astrology AI" with "AI Astrology"
    content = content.replace(/Free Astrology AI/g, 'AI Astrology');
    
    // Hindi replacements: "फ्री एस्ट्रोलॉजी एआई" -> "एआई एस्ट्रोलॉजी"
    content = content.replace(/फ्री एस्ट्रोलॉजी एआई/g, 'एआई एस्ट्रोलॉजी');
    
    // We shouldn't touch freeastrologyai.com because it's lowercase with no spaces,
    // so `Free Astrology AI` won't match it.
    
    // In Footer.astro, there is a span: "AI Astrolo<span class="footer-logo-accent">Chat</span>"
    // Let's replace it with "AI <span class="footer-logo-accent">Astrology</span>"
    content = content.replace(/AI Astrolo<span class="footer-logo-accent">Chat<\/span>/g, 'AI <span class="footer-logo-accent">Astrology</span>');
    content = content.replace(/AI Astrology <span class="footer-logo-accent">Chat<\/span>/g, 'AI <span class="footer-logo-accent">Astrology</span>');
    
    if (content !== original) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log('Updated:', filePath);
    }
}
