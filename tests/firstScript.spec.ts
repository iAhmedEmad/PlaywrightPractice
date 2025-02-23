import {test, expect} from '@playwright/test';

test.describe('login tests', () => {

    test('valid login', async({page})=> {
        await page.goto('https://practice.expandtesting.com/login');
        await page.locator("//*[@id='username']").fill('practice');
        await page.locator("//*[@id='password']").fill('SuperSecretPassword!');
        await page.locator("//*[@type='submit']").click();
        await expect(page.locator("//*[@id='flash']")).toContainText('You logged into a secure area!');
        await page.pause();   
    })
    
    test('invalid login', async({page}) => {
        await page.pause();   
        await page.goto('https://practice.expandtesting.com/login');
        await page.locator("//*[@id='username']").fill('practice');
        await page.locator("//*[@id='password']").fill('SuperSecretPassword!!!!');
        await page.locator("//*[@type='submit']").click();
        await expect(page.locator("//*[@id='flash']")).toContainText('Your password is invalid!'); 
    })  

})

