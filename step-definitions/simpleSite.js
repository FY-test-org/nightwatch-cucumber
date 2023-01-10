const {client} = require('nightwatch-api');
const {Given, When, Then} = require('@cucumber/cucumber');
var page = client.page.demoObjects();

Given('I open Simple site website', () =>{
    console.log("GIVEN TAG")
    return page.navigate().waitForElementVisible('body').assert.elementPresent('body');
});

Then("the page header is {string}", (text)=>{
    console.log("THEN_1 TAG")
    return page.assert.elementPresent('@header').assert.titleContains(text);
});

Then("the button exists", ()=>{
    console.log("THEN_2 TAG")
    return page.waitForElementPresent('@searchButton').assert.elementPresent('@searchButton');
});

When("I click on {string} link", async option=>{
    let selector= `//div[contains(@class,"menu")]//div[contains(@class,"grid-block link")]//a[contains(text(),"${option}")]`;
    await client.useXpath().waitForElementVisible(selector).click(selector);
});

Then("I am on {string} page", async option=>{
    await page.waitForElementVisible("@subpageTitle").assert.containsText("@subpageTitle", option);
});

Then("I see below feature options", async options=>{
    let selector;
    for(let i=0; i<options.raw().length; i++){
        selector= `//div[contains(@class,"product-feature-title") and contains(text(),"${options.raw()[i]}")]`;
        await client.useXpath().waitForElementVisible(selector).assert.visible(selector);
    }
});

When("I click on language icon at top right",async()=>{
    await page.waitForElementVisible("@languageButton").click("@languageButton");
});

Then("I see languages list slide in", async()=>{
    await page.waitForElementVisible("@langMenu").assert.visible("@langMenu");
});
