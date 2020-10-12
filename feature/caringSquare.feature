Feature: Verify the critical features of Caring Square Application

    Scenario: End to End testing to verify critical features of the application
        Given user launch the caring square web application
        Then the user is on caring square homepage
        When the user clicks on Register link
        Then the user is navigated to registration page
        And the user is provided with email, password and confirm password fields
        When the user enters invalid options for registration
        Then the error messages are displayed to the user
        When the user clicks on login link
        Then the user is redirected to login page
        When user enters invalid credentials as "harish" and "12345" and click on login
        Then the invalid credential error message is displayed to the user 
