import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


export default function StripeButton({ price }) {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51MkMhTSBrl0DuIVJmcHIEn2QB8ARE5PIIjjjyqZxfnlWk59Il6FKMAzHhKs9XuJFhVeOtMMFo43SfZJuW6a3barO00FJLnYpL3';
    const onToken = () => {
        alert('Payment Successful');
    }
    return (
        <div>
            <StripeCheckout
                label='Pay Now'
                name='Crwn Clothing Ltd.'
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />

        </div>
    )
}
