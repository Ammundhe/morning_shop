import React, {useState} from "react";
import { CssBaseline,Paper, Step, Stepper, Typography, Button, StepLabel, CircularProgress } from "@material-ui/core";
import AddressForm from "./AddressForm/AddressForm";
import PaymentForm from "./PaymentForm/PaymentForm";
import { Link } from "react-router-dom";
import useStyle from "./style";

const steps=["Shipping Address", "Payment Details"]
const CheckOutForm=({cart})=>{
    const classes=useStyle()
    const [activeStep, setActiveStep]=useState(1)
    const [addressDetails, setAddressDetails]=useState([])
    const [isFinish, setIsFinish]=useState(false)
    const nextStep=()=>setActiveStep((privous)=>privous+1)
    const backStep=()=>setActiveStep((privous)=>privous+1)
    const timeOut=()=>{
        setTimeout(()=>{
            setIsFinish(true)
        }, 3000)
    }
    const test=(data)=>{
        setAddressDetails([{
            ...data,
        }])
        nextStep()
    }
    console.log(addressDetails);
    const Form =()=>activeStep===0 ? <AddressForm test={test} nextStep={nextStep}/>:<PaymentForm cart={cart} backStep={backStep} nextStep={nextStep} timeOut={timeOut}/>
    const Confirmation=()=>{
        return(
            <>
              { isFinish? (<><Typography variant="h6">Thank you for the purchase</Typography> <br />
      <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button></>):(<div className={classes.spinner}>
                    <CircularProgress />
                </div>)}
            </>

        )
    } 
    
    return(
        <>
            <CssBaseline/>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Check Out </Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label)=>{
                            return(
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            )
                        })}
                    </Stepper>
                    {activeStep===steps.length ? <Confirmation/>:<Form/>}
                </Paper>
            </main>
        </>
    )
}
export default CheckOutForm;