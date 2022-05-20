Feature: Instamotion favourite

    Scenario: favourite using search filter
        Given User is at home page of Instamation site
        When User select a make
        And user select a model based on selected make
        And when user clicks on total number of cars shown
        Then user should move to next page with total number of cars shown filtered by user
        And when user add a car to favourite
        Then it should increase the added favourite car number

    Scenario: favourite using Auto finden
        Given User is at home page of Instamation site
        When user clicks on Auto Finden link
        Then user should move to https://www.instamotion.com/autos page
        And then user select the make
        And then user select the model based on make
        And when user add a car to favourite
        Then it should increase the added favourite car number