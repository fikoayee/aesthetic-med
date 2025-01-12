"use client";
import { FormControlLabel, Radio } from "@mui/material";
import styled from "styled-components";

export const StyledRadio = styled(Radio)({
  color: "gray",
  "&.Mui-checked": {
    color: "red",
  },
});

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  ".MuiFormControlLabel-label": {
    fontSize: "14px",
    color: "black",
  },
}));
