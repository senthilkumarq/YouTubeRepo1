import { test, expect, chromium } from '@playwright/test';

test('Google search automation - SenthilSmartQaHub', async ({ }) => {
//  '--start-maximized',
    const browser = await chromium.launch({
        headless: false, // not headless
        args: [
          '--disable-blink-features=AutomationControlled',
        ],
      });
      const context = await browser.newContext({});
      const page = await context.newPage();
      await page.goto('https://www.google.com');

  // Fill the search input
  const searchInput = page.locator('*[name="q"]');
  await searchInput.fill('SenthilSmartQaHub');
  await searchInput.press('Enter');

  // Wait for results to appear
  await page.waitForTimeout(2000);


const location=await page.locator("//*[text()='Not now']").first().isVisible()
 
if(location){

    await page.locator("//*[text()='Not now']").first().click();

}



  // Click the expected link
  const expectedLink = page.locator("//*[text()='https://playwrightautomationtesting.blogspot.com']");
  await expectedLink.first().click();

  // Wait for page to load fully
  await page.waitForTimeout(2000); // Keep a reasonable wait


  await page.locator("//*[text()='Course Topics']").first().click();


  const title=page.locator(" //*[@class='post-title entry-title']")

  await expect(title).toBeVisible()




});
