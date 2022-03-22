import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import { Button } from '@material-ui/core';

const PaymentItem = ({backStep, nextStep, timeOut}) => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) return

    nextStep()
    timeOut()
    
  };

  return (
      
        <form onSubmit={handleSubmit}>
            <CardElement />
            <br/> <br/>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <Button variant='outlined' onClick={backStep}>Back</Button>
                <Button variant='contained' type="submit" color="primary" disabled={!stripe} >Pay </Button>
            </div>
        </form>
    
  )
};
export default PaymentItem;