const { Builder, By, until } = require('selenium-webdriver');
const BasePage = require('../basePage');

class SearchComponent extends BasePage {
    get searchButton() {
        return driver.findElement(By.xpath('//div[@class="RBEWZc"]'))
    }

    get searchField() {
        return driver.findElement(By.xpath('//input[@class="whsOnd zHQkBf"]'))
    } 

    get startSearch() {
        return driver.findElement(By.css('.U26fgb.mUbCce.fKz7Od.i3PoXe.M9Bg4d .vu8Pwe'));
    }

    get resultsOnThisSite() {
        return driver.findElement(By.css('.x8xhwb'))
    }

    get searchResultDescription() {
        return driver.findElements(By.css('.yDWqEe'));
    } 

    get chromeExtensionsButton(){
        return driver.findElement(By.xpath('//*[@id="WDxLfe"]/ul/li[3]/div[1]/div/a'));
        
    }
}

module.exports = SearchComponent