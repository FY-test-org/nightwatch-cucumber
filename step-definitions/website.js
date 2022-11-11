const {client} = require('nightwatch-api');
const {Given, Then} = require('@cucumber/cucumber');
var page = client.page.websitObjects();

Given('I open websitebuilder url', () =>{
    console.log("GIVEN TAG")
    return page.navigate().waitForElementVisible('body').assert.elementPresent('body');    
});

Then("the page logo is present", ()=>{
    console.log("THEN_1 TAG")
    return page.assert.elementPresent('@logo').assert.visible('@logo');
});

Then("search bar exists", ()=>{
    console.log("THEN_2 TAG");
    return page.waitForElementPresent('@searchBox').assert.elementPresent('@searchBox');
});
