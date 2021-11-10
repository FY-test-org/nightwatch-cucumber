
Feature: PlanIT Search Fearture 



Scenario 1: Ensure that the user is able to search for an exisiting products

  Given that the user is logged in and the dashboard page is displayed 
  When I enter and Existing Project into the search bar 
  Then the Project should get displayed 

Scenario 2: Ensure that the user is getting displayed an error message when then user inputs a project that doesnt exisit


  Given that the user is logged in and the dashboard page is displayed 

  When I enters a Project that does not exisit into the search bar 
  Then user should get displayed an error message 


Scenario 3: Ensure that when I type via lot number that only that number lot is getting displayed
  
  Given that the user is logged in and the dashboard page is displayed 
  When I enter a lot number in the search bar 
  When click search via lot number 
  Then the lots that comply with the search should get displayed


Scenario 4: Ensure that when I type via lot number that only that number lot is getting displayed

    Given that the user is logged in and the dashboard page is displayed 
  When I enter and Existing Project into the search bar 
  Then the Project should get displayed 