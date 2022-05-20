Feature: Instamotion add to request

    Scenario: add selected car to request
        Given User is at home page of Instamation site
        When user clicks on Auto Finden link
        Then user should move to https://www.instamotion.com/autos page
        When user click on a car model
        Then car detail page opens
        When user click on Anfrage Starten button
        Then it should move to next page with user details and car details