import puppeteer from 'puppeteer';
import fs from 'fs';

async function run() {
  let browser;
  try {
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.setDefaultNavigationTimeout(0); 
    await page.goto('https://www.hindustantimes.com/cricket');

    const score = await page.evaluate(() => {
      let scoreElement = document.querySelector('.cricketItem a');
      return scoreElement ? scoreElement.innerHTML : 'No score found';
    });



 
    let existingHtml;
    try {
      existingHtml = fs.readFileSync('index.html', 'utf8');
    } catch (err) {
      console.error('Error reading the HTML file:', err);
      return;
    }

    if (!existingHtml) {
      console.error('No content found in the existing HTML file.');
      return;
    }


    const modifiedHtml = existingHtml.replace('<!-- Placeholder for scraped content -->', score);

    fs.writeFileSync('index.html', modifiedHtml, 'utf8');
    console.log('HTML file updated successfully.');
  } catch (error) {
    console.error('Error:', error);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

run();



