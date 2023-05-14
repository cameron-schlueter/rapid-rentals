import React, {useState} from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
//import { Button } from "react-bootstrap";
import axios from 'axios';

const CARD_OPTIONS = {
    iconStyle: 'solid',
    style: {
        base: {
            iconColor: '#c4f0ff',
            color: '#fff',
            fontWeight: 500,
            fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
            fontSize: '16px',
            fontSmoothing: 'antialiased',
            ':webkit-autofill': {color: '#fce883'}
        },
        invalid: {
            iconColor: '#ffc7ee',
            color: '#ffc7ee'
        }
    }
}

export default function Stripe({amount}) {
    const [success, setSuccess] = useState(false)
    const stripe = useStripe()
    const Elements = useElements()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: Elements.getElement(CardElement)
        })
    

        if(!error){
            try {
                const {id} = paymentMethod
                const response = await axios.post('http://localhost:3000/booking', {
                    amount: amount*100,
                    id
                })

                if (response.data.success) {
                    console.log("successful payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }

    return(
        <>
        {!success ?
        <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className='FormRow'>
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <button>Pay</button>
        </form>
        :
        <div>
            <h2>Payment Successful</h2>
        </div>
        }

        </>
    )
}