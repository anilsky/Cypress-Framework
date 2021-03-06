  /// <reference types="cypress" />
  import {
      navigate,
      postcode,
      selectAddress,
      customerAddressStatus,
      validateSuperfastCard,
      addBBTProductToBasket,
      validateBoostCard,
      validateTalkProducts,
      pageNavigationCheckout,
      fillCustomerDetails,
      fillAdditionalDetails,
      validateOrderSummaryPage,
      enterPaymentDetails,
      validateOrderConfirmation
    
    } from '../page-objects/bbt-actions'
    
    describe('bbt actions', () => {
      before(() => {
        navigate() 
        // cy.wait(1000) 
      
  })

  it('should enter postcode and click checkNow', () => {
    postcode('BR31DJ')

    })

    it('should select address and continue', () => {
      selectAddress()
    })

    it('should select address status', () => {
      customerAddressStatus()
    })

    it('validate the superfast product card', () => {
      validateSuperfastCard()
    })

    it('validate the superfast product card', () => {
      addBBTProductToBasket()
    })

    it('validate the boost product card', () => {
      validateBoostCard()
    })

    it('validate the talk product card', () => {
      validateTalkProducts()
    })

    it('navigate to order summary page', () => {
      pageNavigationCheckout()
    })

    it('should enter customer details', () => {
      fillCustomerDetails('Rowan', 'Atkinson', '01-01-1970', '01234567890', 'rowan@sky.com')
    
      })
      it('should enter additional details', () => {
        fillAdditionalDetails()
      })

      it('verify line items from order summary page', () => {
        validateOrderSummaryPage()
      })

      it('enter payment details and confirm the order', () => {
        enterPaymentDetails()
    
    
  })

  it('verify order confirmation page', () => {
    validateOrderConfirmation()


  })
  })
