import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pages = [
  { path: '/', name: 'home' },
  { path: '/life-insurance', name: 'life-insurance' },
  { path: '/retirement-planning', name: 'retirement-planning' },
  { path: '/health-insurance', name: 'health-insurance' },
  { path: '/medicare', name: 'medicare' },
  { path: '/final-expense', name: 'final-expense' },
  { path: '/final-expense-insurance', name: 'final-expense-insurance' },
  { path: '/estate-planning', name: 'estate-planning' },
  { path: '/about-us', name: 'about-us' },
  { path: '/partners', name: 'partners' },
  { path: '/careers', name: 'careers' },
  { path: '/contact', name: 'contact' },
  { path: '/pages-gallery', name: 'pages-gallery' },
  { path: '/download-gallery', name: 'download-gallery' },
];

async function captureScreenshots() {
  const screenshotsDir = join(__dirname, '..', 'public', 'screenshots');
  
  // Create screenshots directory if it doesn't exist
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  console.log('🚀 Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  
  // Set viewport size for consistent screenshots
  await page.setViewport({
    width: 1920,
    height: 1080,
    deviceScaleFactor: 1,
  });

  const baseUrl = 'http://localhost:8080';

  console.log(`📸 Capturing screenshots from ${baseUrl}...\n`);

  for (const route of pages) {
    try {
      const url = `${baseUrl}${route.path}`;
      console.log(`📷 Capturing: ${route.name} (${url})`);
      
      await page.goto(url, {
        waitUntil: 'networkidle0',
        timeout: 30000,
      });

      // Wait a bit for animations to complete
      await new Promise(resolve => setTimeout(resolve, 1000));

      await page.screenshot({
        path: join(screenshotsDir, `${route.name}.png`) as `${string}.png`,
        fullPage: true,
      });

      console.log(`✅ Saved: ${route.name}.png`);
    } catch (error) {
      console.error(`❌ Failed to capture ${route.name}:`, error instanceof Error ? error.message : String(error));
    }
  }

  await browser.close();
  console.log('\n✨ Screenshot capture complete!');
  console.log(`📁 Screenshots saved to: ${screenshotsDir}`);
}

captureScreenshots().catch(console.error);
