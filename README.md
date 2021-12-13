# Nightwatch Cucumber Example Test
This is the repository of the BDD (Behaviour Driven Development) UI testing scenarios - Wikipedia example Project

# About BDD testing scenarios
* BDD scenarios can be found in the folder features folder
* The file 'WikiTest.feature' is empty. Add your BDD scenarios written in Gherkin code. 
* The folder 'example' contains a js file to add the corresponding step definitions.

# Before start executing the test cases
* Install node.js and npm. Access the URL https://nodejs.org/en/download/ to do the installation according to your Operating System.
* Use VS Code to open the project.

# Perform this step once to install the required modules
Open a Terminal session, select the 'src' folder (`> cd src`) and run `npm install`. This action will install the required Nighwatch modules to execute the test scenarios

# Run BDD Nighwatch test - Visual Mode
Open a Terminal session, select the 'src' folder (`> cd src`) and run `npm run Nighwatch:open`. This action will open a CY window for you to visualise the testing execution. Click on "example.feature" to visualise the execution.

# Run BDD Nighwatch test in Headless Mode with Reporter
* Open a Terminal session, select the 'src' folder (`> cd src`) 
* Define you commands in the package.json that are linked to config file.
* ensure under desired capablitiles that the for which ever driver you choose to use you have passed the --headless option in to ensure that the test doesnt open the browser
* type in the termainal npm run 'name of your predefind tag'
*

# Run BDD Nighwatch test with Tags
* Open a Terminal session, select the 'src' folder (`> cd src`) 
* Define you commands in the package.json that are linked to config file.
* ensure under desired capablitiles that the for which ever driver you choose to use you have passed the --headless option in to ensure that the test doesnt open the browser




