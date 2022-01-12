// Import Dependancies 
const {client} = require('nightwatch-api');
const {Given, When, Then} = require('cucumber');


// Import page objects

var WikipediaPage = client.page.demoObjects();



// Wikiepda search Items 
Given('that user is navigates to the WIkipedia home page', () =>{
    console.log("Foundation Step")
    return WikipediaPage
    .navigate()
    .maximizeWindow()

});
//When 

When("the user types in the word cars and clicks the search button", ()=>{

    return WikipediaPage
        .setValue('@WikiSearchInput','Cars') 
        .click('@WikiSearchButton')
});

Then("the user should be displayed with the cars Wikipedia page", ()=>{
    console.log("Validation step")
    return WikipediaPage
    .isVisible('@WikiTitleValidation', "Cars Page is showing") 
    .saveScreenshot('ValidationScreenshots/CompletedScreenshot.png')

  

    

})
