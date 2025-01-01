import { Box } from "@mui/system";

import {
  StyledCreateAccButton,
  StyledCreateAccTypography,
  StyledDescriptionTypography,
  StyledInputLabel,
  StyledMenuItem,
  StyledRegisterButton,
  StyledRegisterInput,
  StyledSelect,
} from "./styles";

import { GlassCard } from "@/app/components/GlassCard/GlassCard";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import { useState } from "react";
import Grid2 from "@mui/material/Grid2";
export const RegisterForm = () => {
  const [userRole, setUserRole] = useState("");
  const handleRoleChange = (event: any) => {
    setUserRole(event?.target.value);
  };
  return (
    <GlassCard title="Sign up" maxWidth="900">
      <StyledDescriptionTypography className="text-lg mt-4">
        Create your account to access the Med-Aesthetics platform and streamline
        your workflow!
      </StyledDescriptionTypography>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <StyledRegisterInput
            aria-label="first name input"
            placeholder="First Name"
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <StyledRegisterInput
            aria-label="last name input"
            placeholder="Last Name"
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <StyledRegisterInput
            aria-label="mobile number input"
            placeholder="Mobile number"
            type="number"
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <StyledRegisterInput
            aria-label="email input"
            placeholder="Email"
            type="email"
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <StyledRegisterInput
            aria-label="password input"
            placeholder="Password"
            type="password"
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <StyledRegisterInput
            aria-label="re-password input"
            placeholder="Confirm Password"
            type="password"
          />
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 6 }}>
          <FormControl fullWidth>
            <StyledInputLabel>Role</StyledInputLabel>
            <StyledSelect
              value={userRole}
              label="Role"
              required
              onChange={handleRoleChange}
              MenuProps={{
                PaperProps: {
                  style: {
                    backgroundColor: "#5695cd",
                    borderRadius: "0.5rem",
                  },
                },
              }}
            >
              <StyledMenuItem value="Recepcionist">Recepcionist</StyledMenuItem>
              <StyledMenuItem value="Assistant">Assistant</StyledMenuItem>
              <StyledMenuItem value="Doctor">Doctor</StyledMenuItem>
            </StyledSelect>
          </FormControl>
        </Grid2>
      </Grid2>

      <StyledRegisterButton variant="contained" size="large">
        Register
      </StyledRegisterButton>
      <Box
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <StyledCreateAccTypography>
          Already have an account?
        </StyledCreateAccTypography>{" "}
        <StyledCreateAccButton size="small">Sign In</StyledCreateAccButton>
      </Box>
    </GlassCard>
  );
};
