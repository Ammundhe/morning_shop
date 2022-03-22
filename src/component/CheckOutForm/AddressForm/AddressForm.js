import React, {useState, useEffect} from "react";
import { InputLabel, MenuItem, Grid, Typography, Select, Button, Input  } from "@material-ui/core";
import FormInput from "./FormInput";
import {Link} from "react-router-dom";
import axios from "axios";
import { useForm, FormProvider } from "react-hook-form";


const AddressForm =({test, next})=>{
    const method=useForm()
    const [shippingCountries, setShippingCountries]=useState([])
    const [shippingCountry, setShippingCountry]=useState('')
    const [subdivisionCountries, setSubdivisionCountries]=useState([])
    const [subdivisionCountry, setSubdivisionCountry]=useState('')

    const fetchAllCountry=async()=>{
        const response= await axios.get("http://localhost:3006/countries")
        
        setShippingCountries(response.data)
        setShippingCountry(response.data[0]["code"]);
    }
    console.log(shippingCountry);
    const fetchAllSubdivision=async(shippingCountry)=>{
        const response= await axios.get("http://localhost:3006/subdivision")
        const newSubdivisionCountry=response.data.filter((subdivision)=>{
           if (subdivision.country===shippingCountry){
               return subdivision
           }
        }
        )
       setSubdivisionCountries(newSubdivisionCountry)
       setSubdivisionCountry(newSubdivisionCountry[0]["name"])
    }
    useEffect(()=>{
        fetchAllCountry()
        return () => {
            setShippingCountries([])
          }
    }, [])
    useEffect(()=>{
        if (shippingCountry) fetchAllSubdivision(shippingCountry)
    },[shippingCountry])
    return(
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...method}>
                <form onSubmit={method.handleSubmit((data)=>test({...data, shippingCountry, subdivisionCountry} ))}>
                    <Grid container spacing={2}>
                        <FormInput name="firstName" label="First Name "/>
                        <FormInput name="lastName" label="Last Name" />
                        <FormInput name="address1" label="Address Line 1"/>
                        <FormInput name="city"  label="City"/>
                        <FormInput name="email" label="Email"/>
                        <FormInput name="zip" label="PostCode/ZipCode"/> 
                        <Grid item xm={12} sm={6}>
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry ?? ""} fullWidth onChange={(e)=>setShippingCountry(e.target.value)}>
                                {shippingCountries.map((country)=>{
                                    return(
                                        <MenuItem key={country.code} value={country.code}>{country.name}</MenuItem>
                                    )
                                })}
                            </Select>
                        </Grid>
                        <Grid item xm={12} sm={6}>
                            <InputLabel>Subdivision Country</InputLabel>
                            <Select value={subdivisionCountry??""} onChange={(e)=>setSubdivisionCountry(e.target.value)} fullWidth>
                                {subdivisionCountries.map((subdivision)=>{
                                    return(
                                        <MenuItem key={subdivision.code} value={subdivision.name}>{subdivision.name}</MenuItem>
                                    )
                                })}
                            </Select>
                        </Grid>
                       
                    </Grid>
                    <br/>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <Button variant="outlined" component={Link} to="/cart"  >Back to Cart</Button>
                        <Button type="submit" variant="contained" color="primary" >Next</Button>
                    </div>
                </form>
            </FormProvider>

        </>
    )
}
export default AddressForm;