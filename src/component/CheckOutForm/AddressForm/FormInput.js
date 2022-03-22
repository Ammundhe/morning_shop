import React, {useRef} from "react";
import { useFormContext, Controller } from "react-hook-form";
import { TextField, Grid } from "@material-ui/core";

const FormInput=({name, label})=>{
    const {register }=useFormContext()
    return(
        <Grid item xm={12} sm={6}>
            <Controller as={TextField} name={name} render = {({ field})=> (
                <TextField
                    fullWidth
                    label={label} 
                    {...register(name)}
                    
                />
            )}  />
        </Grid>
        
    )
}
export default FormInput;