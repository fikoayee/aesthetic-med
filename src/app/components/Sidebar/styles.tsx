"use client";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  backgroundImage: "linear-gradient(310deg, #161616, #242424)",
  width: "200px",
  height: '100vh',
  paddingLeft: '0.3rem',
  paddingRight: '0.1rem'
}));

export const StyledTypographyDivider = styled(Typography)(({ theme }) => ({
    color: '#bbbbbb',
    textAlign: 'start',
    marginLeft: '0.8rem',
    fontSize: '0.65rem',
    letterSpacing: '0.05rem',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginTop: '1rem',
}))
export const StyledSpacer  = styled(Typography)(({ theme }) => ({
  marginTop: '1rem'
}))
