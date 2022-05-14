const BasePage = require('./basePage');
const { Builder, By, until } = require('selenium-webdriver');

class MainPage extends BasePage {
    constructor() {
        super();
    }

    get homeButtonNavMenu() {
        return driver.findElement(By.css('.orb-nav .orb-nav-sport'));
    }

    get searchButton() {
        return driver.findElement(By.id('orbit-search-button'));
    }

}

module.exports = MainPage