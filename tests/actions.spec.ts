  import {test, expect} from '@playwright/test';
  
  test.describe('login tests', () => {
  
      test('valid login', async({page})=> {
        //1- goto
        await page.goto('https://practice.expandtesting.com/');
        await page.goto('https://practice.expandtesting.com/login');
        await expect(page).toHaveURL('https://practice.expandtesting.com/logiiiin');
        //2-reload
        await page.reload();
        //3- goBack
        // await page.pause();
        await page.goBack();
        //4- goForward
        await page.goForward();    
        //5- fill
        await page.locator("[id='username']").fill('practice');
        await page.locator("id=password").fill('SuperSecretPassword!');
        //6- click 
        await page.locator("//*[@type='submit']").click();
        const textContent = await page.locator("div[id='flash'] b").textContent();
        console.log(textContent);
        //7- toBeVisible
        await expect(page.locator("div[id='flash'] b")).toBeVisible();
      })
      

  
    //   test('search', async({page}) => {
    //       await page.goto('https://practice.expandtesting.com');
    //       await page.getByPlaceholder('Search an example...').fill('login');
    //       await page.locator("//a[normalize-space()='Test Login Page']").click();
    //       await expect(page).toHaveTitle('Test Login Page for Automation Testing Practice');
    //   }) 
  
  })
  
  