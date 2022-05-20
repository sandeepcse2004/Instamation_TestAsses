Feature: Instamotion Search

    Scenario: Search using filters
        Given User is at home page of Instamation site
        When User select a make
        And user select a model based on selected make
        And then User clicks on button with all the searchec car
        Then User should move to next page with selected car and its model result

    Scenario: Search using Auto finden
        Given User is at home page of Instamation site
        When user clicks on Auto Finden link
        Then user should move to https://www.instamotion.com/autos page
        And then user select the make
        And then user select the model based on make
        Then user should get result based on selected filter for make and model