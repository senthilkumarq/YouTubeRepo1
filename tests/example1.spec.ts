import { test } from "@playwright/test";

test('has title', async ({ page }) => {

await page.goto('https://www.youtube.com/watch?v=r6m1TilR0eU');
await page.waitForTimeout(5000)
const skipbutton=await page.locator("//*[text()='Skip']").isVisible()
if(skipbutton){
await page.locator("//button[@aria-label='Pause (k)']").click();
}
await page.waitForTimeout(120000)
await page.close()
});
