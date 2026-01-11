const { chromium } = require('playwright');

async function takeScreenshot(url, outputPath) {
    const browser = await chromium.launch({ headless: true });
    const context = await browser.newContext({
        viewport: { width: 1440, height: 900 }
    });
    const page = await context.newPage();

    try {
        // Ensure URL has protocol
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }

        console.log(`Navigating to: ${url}`);
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

        // Wait a bit for any lazy-loaded content
        await page.waitForTimeout(2000);

        // Take full page screenshot
        await page.screenshot({
            path: outputPath,
            fullPage: true
        });

        console.log(`Screenshot saved to: ${outputPath}`);

        // Get page info
        const title = await page.title();
        const viewport = page.viewportSize();

        console.log(`Page title: ${title}`);
        console.log(`Viewport: ${viewport.width}x${viewport.height}`);

    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    } finally {
        await browser.close();
    }
}

// Get arguments
const url = process.argv[2];
const outputPath = process.argv[3] || 'screenshot.png';

if (!url) {
    console.error('Usage: node screenshot.js <url> [output-path]');
    process.exit(1);
}

takeScreenshot(url, outputPath);
