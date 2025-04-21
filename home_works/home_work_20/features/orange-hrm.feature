Feature: Authentication and base UI verification

  Scenario: User successfully logs into the system
    Given user is not logged in
    When user logs in with valid credentials
    Then Dashboard page is displayed

  Scenario: User is already logged in
    Given user is logged in
    Then Dashboard page is displayed

  Scenario Outline: User cannot log in with invalid credentials
    Given user is not logged in
    When user logs in with username "<username>" and password "<password>"
    Then login error message should be shown with text "Invalid credentials"

    Examples:
      | username     | password         |
      | WrongUser    | wrongpassword    |
      | $@$@!#       | $@$!@            |
      | WrongUser!@# | wrongpassword!@# |