const {client} = require('nightwatch-api');
const {Given, When, Then} = require('@cucumber/cucumber');
var page = client.page.demoObjects();

Given('I open Simple site website', () =>{
    console.log("GIVEN TAG")
    return page.navigate().waitForElementVisible('body').assert.elementPresent('body');
});

Then("the page header is {string}", (text)=>{
    console.log("THEN_1 TAG")
    return page.assert.elementPresent('@header').assert.containsText('@header',text);
});

Then("the button exists", ()=>{
    console.log("THEN_2 TAG")
    page.waitForElementPresent('@startHere').click('@startHere');
    return page.waitForElementPresent('@headingText').assert.elementPresent('@headingText');
});


