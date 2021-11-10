// const {client} = require('nightwatch-api');
// const {Given, When, Then,And} = require('cucumber');
// var LoginPage = client.page.LoginPage();
// var DashboardPage = client.page.DashboardPage();



// // Scenario 1 
// // Scenario 1: Ensure that the user is able to search for an exisiting products

// Given('that the user is logged in and the dashboard page is displayed', () =>{
//     console.log("Foundation Step")
//     return DashboardPage
//     .waitForElementPresent("@locPlanITSearch", 1000, false, "Dashboard Search bar is visible")


// });

// When("I enter and Existing Project into the search bar", ()=>{

//     return DashboardPage
//         .setValue("@locPlanITSearch","Sanity")
        

// });

// Then("the Project should get displayed", ()=>{
//     console.log("Validation step")
//     return DashboardPage
//     .waitForElementPresent("@locPlanITSearch", 1000, false, "Dashboard Search bar is visible")

// })



// // Scenario 2
// // Scenario 2: Ensure that the user is getting displayed an error message when then user inputs a project that doesnt exisit

// Given('the dashboard page is displayed', () =>{
//     console.log("Foundation Step")
//     return DashboardPage
//     .navigate()
//     .maximizeWindow()

// });

// When("I enter my Username", ()=>{

//     return DashboardPage
//     .setValue('@locusernameInput',"PlanIT-Tester-1")

// });

// Then("the user is should be displayed the PlanIT Dashboard Screen", ()=>{
//     console.log("Validation step")
//     return DashboardPage
//     .waitForElementPresent("@locPlanITSearch", 1000, false, "Dashboard Search bar is visible")

// })


// // Scenario 3


// Given('the dashboard page is displayed', () =>{
//     console.log("Foundation Step")
//     return LoginPage
//     .navigate()
//     .maximizeWindow()

// });

// When("I enter my Username", ()=>{

//     return LoginPage
//     .setValue('@locusernameInput',"PlanIT-Tester-1")

// });


// When("I enter my Username", ()=>{

//     return LoginPage
//     .setValue('@locusernameInput',"PlanIT-Tester-1")

// });

// Then("the user is should be displayed the PlanIT Dashboard Screen", ()=>{
//     console.log("Validation step")
//     return DashboardPage
//     .waitForElementPresent("@locPlanITSearch", 1000, false, "Dashboard Search bar is visible")

// })





// // Scenario 4


// Given('the dashboard page is displayed', () =>{
//     console.log("Foundation Step")
//     return LoginPage
//     .navigate()
//     .maximizeWindow()

// });

// When("I enter my Username", ()=>{

//     return LoginPage
//     .setValue('@locusernameInput',"PlanIT-Tester-1")

// });

// Then("the user is should be displayed the PlanIT Dashboard Screen", ()=>{
//     console.log("Validation step")
//     return DashboardPage
//     .waitForElementPresent("@locPlanITSearch", 1000, false, "Dashboard Search bar is visible")

// })
