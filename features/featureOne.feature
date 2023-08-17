@one
Feature: Simple Navigation and Assertion

  Scenario: Visit Simple Site website

    Given I open Simple site website
    Then the page header is "Domain Names"
    And the button exists
