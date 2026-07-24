import fs from 'fs';
const entryPath = './dist/server/entry.mjs';
let content = fs.readFileSync(entryPath, 'utf8');

const cronCode = `
worker_entry_default.scheduled = async (event, env, ctx) => {
  try {
    const request = new Request("https://freeastrologyai.com/api/backfill-horoscopes?offset=0");
    const response = await worker_entry_default.fetch(request, env, ctx);
    const result = await response.text();
    console.log("Cron trigger result:", result);
  } catch (err) {
    console.error("Cron trigger failed:", err);
  }
};
`;

content = content.replace('export { worker_entry_default as default };', cronCode + '\nexport { worker_entry_default as default };');

fs.writeFileSync(entryPath, content);
console.log("Injected scheduled cron handler into worker.");
