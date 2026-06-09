import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, 'temporary screenshots');

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const url      = process.argv[2] || 'http://localhost:3000/webmelior-hub/site/index.html';
const selector = process.argv[3] || 'header#nav a[aria-label="WebMelior home"]';
const label    = process.argv[4] || 'logo-nav-zoom';

// Auto-increment screenshot number
const existing = fs.readdirSync(outDir).filter(f => f.match(/^screenshot-\d+/));
const nums = existing.map(f => parseInt(f.match(/^screenshot-(\d+)/)?.[1] ?? '0', 10));
const next = nums.length ? Math.max(...nums) + 1 : 1;

const filename = `screenshot-${next}-${label}.png`;
const outPath = path.join(outDir, filename);

console.log(`Targeting element: "${selector}" on page: ${url}`);

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

// Wait for elements & scroll to it
try {
  await page.waitForSelector(selector, { timeout: 5000 });
  const element = await page.$(selector);

  // Let animations settle
  await new Promise(r => setTimeout(r, 500));
  
  await element.screenshot({ path: outPath });
  console.log(`Saved cropped screenshot: ${outPath}`);
} catch (err) {
  console.error(`Error: Could not capture selector "${selector}".`, err.message);
}

await browser.close();
