@three
Feature: Navigate to Themes page

    Scenario: Visit Themes page
        Given I open Simple site website
        Then the page header is "SimpleSite.com"
        When I click on "Themes" link
        Then I am on "Themes" page

    Scenario: Validate Themes page 
        Given I am on "Themes" page
        Then I see below feature options
            | ITALIAN RESTAURANT |
            | CAFE |
            | SENIOR HOME CARE SERVICES |
    
    Scenario: Validate Languages options
        Given I am on "Themes" page
        When I click on language icon at top right
        Then I see languages list slide in
