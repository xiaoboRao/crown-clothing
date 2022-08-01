import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey =
    'pk_test_51LRb48BsrkUTGG3nXi4OWntjHSrcbBD4qkeQmrl91687uPh6OWnAQjSc6hnAjewcKrM2GIpNfY6MrxoN7HUH1Id600ouSZbqLz'
  const onToken = (token) => {
    console.log('token', token)

    alert('Pay Successfully')
  }
  return (
    <div>
      <StripeCheckout
        name="Three Comma Co."
        label="Pay Now"
        shippingAddress
        billingAddress
        token={onToken}
        stripeKey={publishableKey}
        image="https://stripe.com/img/documentation/checkout/marketplace.png"
        description={`Your Total is ${price}`}
        amount={priceForStripe}
      />
    </div>
  )
}

export default StripeButton
