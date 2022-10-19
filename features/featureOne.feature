@one
Feature: Navigation and Assertion

  Scenario: Visit Simple Site website

    Given I open Simple site website
    Then the page header is "SimpleSite.com"
    And the button exists
