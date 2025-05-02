import { chromium, test } from "@playwright/test";

test('has title', async ({}) => {

 const browser = await chromium.launchPersistentContext('C:/senthil-profile', {

      //  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', // exact path to your local Chrome
      });
    const page = await browser.newPage();
await page.goto('https://www.google.com/');


console.log('Filling search input...');
  const searchInput = page.locator('*[name="q"]');
  await searchInput.pressSequentially('SenthilSmartQaHub');
  console.log('Submitting search...');
  await searchInput.press('Enter');

  console.log('Waiting for search results...');
  await page.waitForLoadState('domcontentloaded')

  console.log('Checking for "Not now" prompt...');
  const location = await page.locator("//*[text()='Not now']").first().isVisible();

  if (location) {
    console.log('"Not now" prompt found. Clicking it...');
    await page.locator("//*[text()='Not now']").first().click();
  } else {
    console.log('"Not now" prompt not visible.');
  }
await page.locator("(//*[text()='YouTube']/following-sibling::span[text()=' SenthilSmartQAHub'])[2]").click();

const play=await page.locator("//button[@aria-label='Pause (k)']").isVisible()
if(play){
await page.locator("//button[@aria-label='Pause (k)']").click();
}


await page.waitForTimeout(5000)
const skipbutton=await page.locator("//*[text()='Skip']").isVisible()
if(skipbutton){
await page.locator("//button[@aria-label='Pause (k)']").click();
}
await page.waitForTimeout(1200)
await page.screenshot()
await page.close()
});
