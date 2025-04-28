import { test } from "@playwright/test";

test('has title', async ({ page }) => {

await page.goto('https://www.youtube.com/watch?v=r6m1TilR0eU');
await page.locator("//button[@aria-label='Pause (k)']").click();
await page.waitForTimeout(300000)

});
