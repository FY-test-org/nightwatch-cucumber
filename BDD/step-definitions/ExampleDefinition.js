// Import Statements
const { client } = require('nightwatch-api')
const { Given, When, Then } = require('cucumber');
// Import Pages 
const WikiPage = client.page.WikiHomepage();




//// Your step definitions /////
Given("that the user is on the Wikipedia Homepage", () => {
    console.log("Foundational Step")
    return WikiPage
  .navigate()
  

    
});

When("the user types in Item they want to search", function () {
    return Wiki
    .EnterItem()
    .SearchAction()
});

Then("the user should be shown the results.", function () {
    console.log("Then")

    return Wiki
    .ValidationStep()
})

