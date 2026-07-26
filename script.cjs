const fs = require('fs'); 
const lines = fs.readFileSync('C:/Users/dk290/.gemini/antigravity-ide/brain/ff1da194-e719-4a69-801a-3d92360a33d2/.system_generated/logs/transcript.jsonl', 'utf8').split('\n'); 
const firstPrompt = JSON.parse(lines.find(l => l.includes("I'm expanding my AstroJS"))); 
fs.writeFileSync('prompt.txt', firstPrompt.content);
