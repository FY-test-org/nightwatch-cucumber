An automated UI suite integrated with Cucumber for documenting features, test scenarios.
Visit https://www.velotio.com/engineering-blog/automation-testing-with-nightwatch-js for detailed insights into the setup

# UI Test Automation Framework

The framework uses two major components:

1. [Cucumber](https://cucumber.io/) - #1 tool for [BDD](https://en.wikipedia.org/wiki/Behavior-driven_development). Uses Gherkin as a starter language which is plain English in Given, When, Then format to structure features and scenarios

2. [NightwatchJS](https://nightwatchjs.org/) - UI testing framework, acts as an underlying execution engine for cucumber, has built-in assertions
   Nightwatch does not have native cucumber support, so nightwatch-api port is used
### Pre-requisites

- [node](https://nodejs.org/en/) - latest
- [npm] (https://docs.npmjs.com/cli/v6/commands/npm-install)
- [nvm] (https://heynode.com/tutorial/install-nodejs-locally-nvm/)

### Setup and Installation

1. git clone the nightwatch-cucumber repository in your system

2. Now, install the dependencies by running the below command in nightwatch-cucumber repo directory
    ```shell
    npm i
    ```
3. Setup is complete

### Run tests

1. Run simple test script in demo.js under tests/ using two below ways (i.e. writing and running simple tests without cucumber) :

    - Running the test file using nightwatch command
        ```shell
        nightwatch tests/demo.js
        ```
    - Running the test file using npm run command. test-demo is set in package.json under `scripts`
        ```shell
        npm run test-demo
        ```

2. Run cucumber feature file which has the test scenarios

    - Running `npm run test` command. `test` is set package.json under `scripts` which runs the step-definitions(code) of the scenarios written in feature file. 


### Directory structure

The directory structure looks something like this:

#### features/

contains cucumber `.feature` files in which the test scenarios and test steps are written in Gherkin format. Can further group features according to the functionality. Below is an example for ‘featureOne’ feature file

_featureOne.feature_:

```gherkin
Feature: Navigation and Assertion

    Scenario: Visit Simple Site website

        Given I open Simple site website
        Then the page header is "SimpleSite.com"
        And the button exists
```

#### step_definitions/

contains actual implementation of the steps written in the features. The implementation uses nightwatchjs. Steps are executed according to the order in the scenario. A particular step is picked, is searched using regex in step_definitions directory and the underlying code is executed.

_simpleSite.js_:

```javascript
Given('I open Simple site website', () =>{
    console.log("GIVEN TAG")
    return page.navigate().waitForElementVisible('body').assert.elementPresent('body');
});
```

#### page-objects/

page-object directory has the files containing css/xPath selectors for the web elements of the application.

_demoObjects.js_:

```javascript
module.exports = {
    url: 'https://www.simplesite.com/',
    elements: {
      startHere: {
          selector: "(//a[text()='Start here'])[1]",
            locateStrategy: 'xpath'},
      header: {
          selector: "//a[text()='SimpleSite.com']",
          locateStrategy: 'xpath'},
      headingText: {
          selector:`//h1[contains(text(),'Create')]`,
            locateStrategy: 'xpath'}
    }    
}
```
#### nightwatch.conf.js

nightwatch configurations. Complete guide in https://www.velotio.com/engineering-blog/automation-testing-with-nightwatch-js
#### cucumber.conf.js

cucumber configurations. Complete guide in https://www.velotio.com/engineering-blog/automation-testing-with-nightwatch-js
