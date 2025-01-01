import { Box } from "@mui/system"

import { StyledCreateAccButton, StyledCreateAccTypography, StyledDescriptionTypography, StyledForgotButton, StyledLoginButton, StyledLoginInput } from "./styles"
import { Checkbox, FormControlLabel } from "@mui/material"
import { useState } from "react";
import { GlassCard } from "@/app/components/GlassCard/GlassCard";

export const  LoginForm = () => {
      const [checked, setChecked] = useState(false);
      const handleChange = (event: any) => {
        setChecked(event.target.checked);
      };
    return(
      <GlassCard title="Sign in">
        <StyledDescriptionTypography className="text-lg mt-4">Log in to begin managing your Med-Aesthetics journey with ease!</StyledDescriptionTypography>
        <StyledLoginInput aria-label="email input" placeholder="Email" type="email"></StyledLoginInput>
        <StyledLoginInput aria-label="password input" placeholder="Password" type="password"></StyledLoginInput>
        <Box sx={{display: 'flex', paddingInline: '0.2rem'}}>
        <FormControlLabel 
              control={
                <Checkbox size="small" checked={checked} onChange={handleChange} name="remember me" sx={{color: '#3187d4'}} />
              }
              sx={{
                '& .MuiFormControlLabel-label': {
                  fontSize: '0.95rem',
                  paddingTop: '2px'
                },
              }}
              label="Remember me"
            />
          <StyledForgotButton>Forgot password?</StyledForgotButton>
        </Box>
        <StyledLoginButton variant="contained" size="large">Login</StyledLoginButton>
      <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}> <StyledCreateAccTypography>Need an account?</StyledCreateAccTypography>  <StyledCreateAccButton size="small">Sign Up</StyledCreateAccButton></Box>
    </GlassCard>
    )
}