import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import CurrencyFormat from 'react-currency-format';
import { Link } from 'react-router-dom';
import '../css/payment.css';
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../stateProvider';
import CheckoutProduct from './checkoutProduct';

function Payment() {
    const [{basket, user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState('');

    const handleSubmit = e => {
        //Stripe functionality
    }

    const handleChange = event => {
        //Listen for changes inside the card element
        //then display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message: "");
    }

    return (
        <div className="payment">
            <div className="payment__container">
                <h1>Checkout {<Link to='/checkout'>{basket?.length} items</Link>}</h1>
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angelas, CA</p>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                        <div className="payment__items">
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                    />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                            <div className="payment__priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p>: 'Buy Now'}</span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
