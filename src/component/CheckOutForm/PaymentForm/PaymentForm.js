import React from "react";
import { Divider, Typography } from "@material-ui/core";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Review from "./Review";
import PaymentItem from "./PaymentElement";

const stripePromise= loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
const PaymentForm=({cart, backStep, nextStep, timeOut})=>{
    return(
        <>
            <Review cart={cart}/>
            <Divider/>
            <Typography variant="h6" gutterBottom style={{margin:"10px,0"}}>Payment Method</Typography>
            <Elements stripe={stripePromise} >
                <PaymentItem backStep={backStep} nextStep={nextStep} timeOut={timeOut}/>
            </Elements>
        </>
    )
}
export default PaymentForm;