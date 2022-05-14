const { expect } = require('chai');
const {Builder, By, until}=require ('selenium-webdriver');



describe.skip('new test',function(){
    let driver;
    //await driver.manage().window().maximize();        //по сути должно развернуть браузер, но что-то не работает, лучше не использовать.
    beforeEach(async() => {
        driver = new Builder().forBrowser('chrome').build();
        await driver.manage().window().setRect({ width: 1920, height: 1080 });      //выставляется разрешение перед тестом
    });

    afterEach(async() => {
        await driver.close();
    })

    it.skip (`chromeDriver test`, async () => {
        await driver.get('https://chromedriver.chromium.org/home');     //заходим на сайт
        const titleMain = await driver.getTitle();                      //получаем тайтл урла
        expect(titleMain).to.include('ChromeDriver');                   //сравниваем значение тайтла
        await driver.sleep(3000);
       
    })

    it.skip (`check Chrome Extencions`, async()=>{
        //необходимо развернуть браузер
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.sleep(3000);
        const chromeExtensionsButton = await driver.findElement(By.xpath('//*[@id="WDxLfe"]/ul/li[3]/div[1]/div/a'));       //находим элемент Extensions
        await driver.wait(until.elementIsVisible(chromeExtensionsButton),3000);     //настраиваем waiter, чтобы дождался видимого элемента
        await chromeExtensionsButton.click();               //клик элемента
        const titleExtensions = await driver.getTitle();
        expect(titleExtensions).to.include('Chrome Extensions');
        await driver.sleep(3000);


    })

    it.skip (`search 'driver'`, async()=>{
        await driver.get('https://chromedriver.chromium.org/home');
        await driver.sleep(3000);
        const searchButton = await driver.findElement(By.xpath('//div[@class="RBEWZc"]'));      //находим элемент поиска
        await driver.wait(until.elementIsVisible(searchButton),3000);
        await searchButton.click();
        const searchField = await driver.findElement(By.xpath('//input[@class="whsOnd zHQkBf"]'));      //находим элемент поляПоиска
        await driver.wait(until.elementIsVisible(searchField),3000);
        await searchField.sendKeys('driver');       //отправляем в поиск str 'driver'
        await driver.sleep(3000);
        const searchClick = await driver.findElement(By.css('.vu8Pwe'));        //находим элемент поиска новый
        await driver.wait(until.elementIsVisible(searchClick),3000);
        await searchClick.click();
        await driver.sleep(3000);
        const searchResult = await driver.findElements(By.css('.yDWqEe'));      //находим результаты поиска элементамИ текста
        expect(await searchResult[0].getText()).to.include('driver');       //получаем текст из элемента и проверяем значение на совпадение 'driver'

    })
})