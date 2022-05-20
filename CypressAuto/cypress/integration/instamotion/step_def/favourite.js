/// <reference types="cypress" />

import selectors from '../../../support//selectors.js';

context('Add favourite', () => {
    before(function () {
        cy.fixture('data').then((data) => {
            this.data = data
          })
    })

    describe('favourite using search filter', () => {
        it('User is at home page of Instamation site', function (){
            cy.OpenUrl()
            cy.log('Site Opened')
        })

        it('User select a make', function (){
            cy.clickBySelector(selectors.SELECT_MAKE)
            cy.clickBySelector(selectors.SELECT_MAKE_OPTION)
            cy.log('Make Selected')
        })

        it('user select a model based on selected make', function (){
            cy.clickBySelector(selectors.SELECT_MODEL)
            cy.clickBySelector(selectors.SELECT_MODEL_OPTION)
            cy.log('Model Selected')
        })

        it('when user clicks on total number of cars shown', function (){
            cy.clickBySelector(selectors.SEARCH_BUTTON)
            cy.log('Click on button with result')
        })

        it('user should move to next page with total number of cars shown filtered by user', function (){
            cy.url().should('contain', this.data.auto_url)
            cy.getBySelector(selectors.BEFORE_FAV_COUNT).should('contain', this.data.before_fav)
            cy.log('Moved to page with search result in details')
        })

        it('when user add a car to favourite', function (){
            cy.clickBySelector(selectors.ACCEPT_BUTTON)
            cy.clickBySelector(selectors.HEART)
            cy.log('Car added to favourite')
        })

        it('it should increase the added favourite car number', function (){
            cy.getBySelector(selectors.AFTER_FAV_COUNT).should('contain', this.data.after_fav)
            cy.log('verified car count as favourite')
        })
    })
})