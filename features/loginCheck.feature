Feature: login Functionality

Scenario: login in the apps

Given I navigate to the login page
When I enter username and password
And I click on login button
Then I should be login successfully
