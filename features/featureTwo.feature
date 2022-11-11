@two
Feature: Navigation and Assertion part 2

  Scenario: Visit websitebuilder

    Given I open websitebuilder url
    Then the page logo is present
    And search bar exists
