const {client} = require('nightwatch-api');
const {Given, When, Then} = require('cucumber');
var LoginPage = client.page.demoObjects();

Given('I open Open the PlanIT Login Screen', () =>{
    console.log("Foundation Step")
    return LoginPage
    .navigate()

});

When("I enter my Username", ()=>{
    console.log("Action Step")
    return LoginPage
    .setValue('@Username',"")
});

When("I enter my Password", ()=>{
    console.log("Action Step")
    // page.waitForElementPresent('@startHere').click('@startHere');
    // return page.waitForElementPresent('@headingText').assert.elementPresent('@headingText');
});

When("Click Subimit", ()=>{
    console.log("Action Step")
    // page.waitForElementPresent('@startHere').click('@startHere');
    // return page.waitForElementPresent('@headingText').assert.elementPresent('@headingText');
});

Then("the user is should be displayed the PlanIT Dashboard Screen", ()=>{
    console.log("Validation step")

})