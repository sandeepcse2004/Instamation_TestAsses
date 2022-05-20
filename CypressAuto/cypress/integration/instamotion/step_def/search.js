/// <reference types="cypress" />

import selectors from '../../../support//selectors.js';

context('Search', () => {
    before(function () {
        cy.fixture('data').then((data) => {
            this.data = data
          })
    })


    describe('Filters', () => {
        it('User is at home page of Instamation site', function () {
            cy.OpenUrl()
            cy.log('Site Opened')
            
        })

        it('User select a make', function () {         
            cy.clickBySelector(selectors.SELECT_MAKE)
            cy.clickBySelector(selectors.SELECT_MAKE_OPTION)
            cy.log('Make selected')
        })

        it('user select a model based on selected make', function () {
            cy.clickBySelector(selectors.SELECT_MODEL)
            cy.clickBySelector(selectors.SELECT_MODEL_OPTION)
            cy.log('Model Selected')
        })

        it('then User clicks on button with all the searchec car', function () {
            cy.clickBySelector(selectors.SEARCH_BUTTON)
            cy.log('Click on button')
        })

        it('User should move to next page with selected car and its model result', function () {
            cy.url().should('contain', this.data.auto_url)
            cy.log('Moved to search result detail page')
        })
    })

    describe('Auto finden', () => {
        it('User is at home page of Instamation site', function () {
            cy.OpenUrl()
            cy.log('Site Opened')
        })

        it('user clicks on Auto Finden link', function () {
            cy.clickBySelector(selectors.AUTO_FINDEN)
            cy.log('Clicked on Auto Finden link')
        })

        it('user should move to https://www.instamotion.com/autos page', function () {
            cy.url().should('contain', this.data.auto_url)
            cy.log('user moved to  auto page')
        })

        it('then user select the make', function () {
            cy.clickBySelector(selectors.ACCEPT_BUTTON)
            cy.clickBySelector(selectors.AUTO_FINDEN_MAKE)
            cy.clickBySelector(selectors.AUTO_FINDEN_MAKE_OPTION)
            cy.log('selected a make')
        })

        it('then user select the model based on make', function () {
            cy.clickBySelector(selectors.AUTO_FINDEN_MODEL)
            cy.clickBySelector(selectors.AUTO_FINDEN_MODEL_OPTION)
            cy.log('Model Selected')
        })

        it('user should get result based on selected filter for make and model', function () {
            cy.get(selectors.MAKE_MODEL_TEXT).should('contain', this.data.make_model)
            cy.log('Result displayed based on criteria')
        })
    })
})