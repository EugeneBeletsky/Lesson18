const { Builder, By, until } = require('selenium-webdriver');
let driver = new Builder().forBrowser('chrome').build();

class BasePage {
    constructor () {
        global.driver = driver;
    }

    static async navigate(url) {
        await driver.get(url);
    }

    static async close() {
        await driver.close();
    }

    static async sizeOfBrowser(width, height){
        await driver.manage().window().setSize(width, height);
    }
}

module.exports = BasePage;