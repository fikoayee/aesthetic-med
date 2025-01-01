"use client";
import { Button, OutlinedInput, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import styled from "styled-components";

export const StyledMain = styled("main")({
  backgroundImage: `url('/assets/svg/register-background.svg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledLoginFormWrapper = styled(Stack)(({ theme }) => ({
  display: "flex",
  gap: "1rem",
  backgroundColor: "rgba(0, 0, 0, 0.05)",
  paddingInline: "2rem",
  paddingBlock: "3rem",
  borderRadius: "3rem",
  [theme.breakpoints.down("md")]: {
    marginInline: "0.5rem",
  },
}));

export const StyledForgotButton = styled(Button)({
  textTransform: "none",
  borderRadius: "0.7rem",
  marginLeft: "auto",
});

export const StyledLoginInput = styled(OutlinedInput)(({ theme }) => ({
  width: "100%",
  borderRadius: "1rem",
  backgroundColor: "#5695cd",
  color: "white",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#3187d4",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#3187d4",
  },
  "&.Mui-focused": {
    backgroundColor: "#3187d4",
  },
}));

export const StyledLoginButton = styled(Button)(({ theme }) => ({
  width: "100%",
  borderRadius: "1rem",
  textTransform: "none",
  backgroundColor: "#3187d4",
  "&.Mui-disabled": {
    backgroundColor: "#77a0c7",
  },
}));

export const StyledCreateAccButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  borderRadius: "0.7rem",
  marginTop: "1px",
}));

export const StyledCreateAccTypography = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  color: "#e6e6e6",
}));
export const StyledTitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: "700",
  background: "linear-gradient(250deg, #ffffff, #f7f7f7 )",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "center",
}));
export const StyledDescriptionTypography = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  paddingInline: "1rem",
  fontWeight: "400",
  background: "linear-gradient(90deg, #ffffff, #f7f7f7 )",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "center",
}));
