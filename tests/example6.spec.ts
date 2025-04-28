import { test } from "@playwright/test";

test('has title', async ({ page }) => {

await page.goto('https://www.google.com');
await page.locator("//*[@name='q']").fill("SenthilSmartQaHub")
await page.locator("//*[@name='q']").press('Enter')
const captacha=await page.locator("//div[@class='recaptcha-checkbox-border']").isVisible()
if(captacha){
    await page.waitForTimeout(2000)
    await page.locator("//div[@class='recaptcha-checkbox-border']").click()
}
await page.locator("(//*[text()='https://playwrightautomationtesting.blogspot.com'])[1]").click()
await page.waitForTimeout(300000)
});
