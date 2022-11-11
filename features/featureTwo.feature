@two
Feature: Navigate to Features page

    Scenario: Visit Features page
        Given I open Simple site website
        Then the page header is "SimpleSite.com"
        When I click on "Features" link
        Then I am on "Features" page

    Scenario: Validate Features page 
        Given I am on "Features" page
        Then I see below feature options
            | Design, backgrounds and colours |
            | Personal Domain Name |
            | Your own online store |
