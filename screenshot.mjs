import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, 'temporary screenshots');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const url   = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

// Auto-increment screenshot number
const existing = fs.readdirSync(outDir).filter(f => f.match(/^screenshot-\d+/));
const nums = existing.map(f => parseInt(f.match(/^screenshot-(\d+)/)?.[1] ?? '0', 10));
const next = nums.length ? Math.max(...nums) + 1 : 1;

const filename = label
  ? `screenshot-${next}-${label}.png`
  : `screenshot-${next}.png`;
const outPath = path.join(outDir, filename);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

// Scroll page to trigger IntersectionObserver reveal animations
await page.evaluate(async () => {
  await new Promise(resolve => {
    let y = 0;
    const step = 600;
    const id = setInterval(() => {
      window.scrollBy(0, step);
      y += step;
      if (y >= document.body.scrollHeight) {
        window.scrollTo(0, 0);
        clearInterval(id);
        resolve();
      }
    }, 120);
  });
});
// Let animations finish
await new Promise(r => setTimeout(r, 900));

await page.screenshot({ path: outPath, fullPage: true });
await browser.close();

console.log(`Saved: ${outPath}`);
