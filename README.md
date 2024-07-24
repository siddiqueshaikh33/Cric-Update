# Cric-Update


# Web Scraping and HTML Injection with Puppeteer

This project demonstrates how to scrape data from a webpage using Puppeteer and inject the scraped content into an existing HTML file.

## Prerequisites

Ensure you have the following installed:
- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Setup

1. Clone the repository or download the project files.

2. Navigate to the project directory:
 
   cd your-project-directory

3. Install the required dependencies:
    npm install puppeteer


# Project Structure
   scrapeAndInject.js: The main script that scrapes data from the specified webpage and injects it into the HTML file.

   index.html: The HTML file that will receive the scraped content. 


# How It Works
 * Scraping Data: The script uses Puppeteer to navigate to a specified webpage (https://www.hindustantimes.com/cricket) and scrape the innerHTML of a specific element.

* Reading Existing HTML: The script reads the existing HTML file (index.html).

* Injecting Scraped Content: The script replaces a placeholder comment (<!-- Placeholder for scraped content -->) in the existing HTML file with the scraped content.

* Writing Modified HTML: The modified HTML content is written back to the file.