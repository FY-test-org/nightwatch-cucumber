

Feature: Feature: Searching information in multiple languages (https://wikipedia.org)
As a user, I want to navigate to the main page of Wikipedia, so that I can perform searches in multiple languages.

  Scenario Outline: 
    Given that the user is on the  Wikipedia Homepage
    When the user types in Item they want to search
    And the user clicks on "<Language>" Option dropdown
    And the user clicks the search Icon
    Then the user should be shown the results in that language.
    Examples: 
      | Language |
      | English  |
      | Spanish  |
      | French   |

  Scenario Outline: As a user, I want to navigate to the Wikipedia page in English, so that I can perform searches in English.
    Given that the user is on the  Wikipedia Homepage
    When the user selects on the English language option for the drop
    And the user types the "<searchword>" into the search field
    And the user clicks the search Icon
    Then the user should be shown the result in english
    Examples: 
      | searchword           |
      | Cars                 |
      | The Pyramid of Giza  |
      | Rockets              |