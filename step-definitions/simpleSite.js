const {client} = require('nightwatch-api');
const {Given, When, Then} = require('cucumber');
var LoginPage = client.page.LoginPage();
var DashboardPage = client.page.DashboardPage();


Given('I open Open the PlanIT Login Screen', () =>{
    console.log("Foundation Step")
    return LoginPage
    .navigate()
    .maximizeWindow()

});

When("I enter my Username", ()=>{
    console.log("Action step")

    return LoginPage
    .setValue('@locusernameInput',"PlanIT-Tester-1")

});

When("I enter my Password", ()=>{
    console.log("Action step")

    return LoginPage
    .setValue('@locPasswordInput',"PlanIT-Tester-1")
});

When("Click Subimit", ()=>{
    console.log("Action step")

    return LoginPage
    .click("@locSubmitBtn")
  
});

Then("the user is should be displayed the PlanIT Dashboard Screen", ()=>{
    console.log("Validation step")
    return DashboardPage
    .waitForElementPresent("@locPlanITSearch", 1000, false, "Dashboard Search bar is visible")

})


// When("I enter an Incorrect Username", ()=>{
//     console.log("Action step")

//     return LoginPage
//     .setValue('@locusernameInput',"Testing1")

// });

// When("I enter an Incorrect Password", ()=>{
//     console.log("Action step")

//     return LoginPage
//     .setValue('@locPasswordInput',"Testing1")
// });