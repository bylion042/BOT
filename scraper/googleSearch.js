const puppeteer = require('puppeteer');

async function googleSearch(query) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    try {
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}&hl=en`;
        await page.goto(searchUrl, { waitUntil: 'domcontentloaded' });

        // Extract search result titles, links, and snippets
        const results = await page.evaluate(() => {
            const searchItems = Array.from(document.querySelectorAll('div.tF2Cxc'));
            return searchItems.map(item => ({
                title: item.querySelector('h3')?.textContent || 'No title available',
                link: item.querySelector('a')?.href || 'No link available',
                snippet: item.querySelector('.VwiC3b')?.textContent || 'No snippet available',
            }));
        });

        await browser.close();
        return results.slice(0, 10); // Return the top 10 results
    } catch (error) {
        console.error('Error during Google search:', error);
        await browser.close();
        return [];
    }
}

module.exports = googleSearch;
