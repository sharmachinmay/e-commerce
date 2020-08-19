import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton =({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HHt5BHhfkfuWLKw9z3Ueo2rdfVpZL7SYjH0iKfSTW6XmpyaqFCtMAYf5ZSRDq2xC73ER8l44O1m3YMctbQaATZh005iE6cfGH';

    const onToken = token => {
        console.log(token);
        alert('Payment Sucessful');
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;