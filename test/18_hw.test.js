const { Builder, By, until } = require('selenium-webdriver');
const { expect } = require('chai');
const MainPage = require('../pageObject/mainPage');
const BaseElements = require('../helpers/baseElements');
const SearchComponent = require('../pageObject/pageComponents/searchComponent');
const BasePage = require('../pageObject/basePage');

const mainPage = new MainPage();
const baseElements = new BaseElements();
const searchComponent = new SearchComponent();

describe('chromedriver tests', () => {
    
    before(async()=>{
        await driver.manage().window().setRect({ width: 1920, height: 1080 });      //выставляется разрешение перед тестом
    });
    after(async() => {
        await BasePage.close();
    });

    it (`check search 'driver'`, async () => {
        await BasePage.navigate('https://chromedriver.chromium.org/');
        await baseElements.click(searchComponent.searchButton);
        await baseElements.sendKeys(searchComponent.searchField, 'driver');
        await baseElements.click(searchComponent.startSearch);
        //await driver.wait(until.elementIsVisible(searchComponent.resultsOnThisSite), 5000);
        const descriptions = await searchComponent.searchResultDescription;
        for(let element in descriptions) {
            console.log('1 - ', element)
            expect(await element.getText().toLowerCase()).to.contain('driver');
        }
    })

    it ('check Main title', async()=>{
        await BasePage.navigate('https://chromedriver.chromium.org/');
        const mainTitle = await baseElements.getTitle();
        expect(mainTitle).to.include('ChromeDriver');
        await driver.sleep(3000);
    })

    it (`check tab 'Chrome Extensions'`, async()=>{
        
        await BasePage.navigate('https://chromedriver.chromium.org/');
        await baseElements.click(searchComponent.chromeExtensionsButton);
        const titleExtensions = await baseElements.getTitle();
        expect(titleExtensions).to.include('Chrome Extensions');
        await driver.sleep(3000);
    })
});