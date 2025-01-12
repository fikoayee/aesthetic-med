"use client";
import {
  Button,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import styled from "styled-components";

export const StyledMain = styled("main")({
  backgroundImage: `url('/assets/svg/login-background.svg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const StyledForgotButton = styled(Button)({
  textTransform: "none",
  borderRadius: "0.7rem",
  marginLeft: "auto",
});

export const StyledRegisterInput = styled(OutlinedInput)(({ theme }) => ({
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

export const StyledRegisterButton = styled(Button)(({ theme }) => ({
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

export const StyledDescriptionTypography = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  paddingInline: "1rem",
  fontWeight: "400",
  background: "linear-gradient(90deg, #ffffff, #f7f7f7 )",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "center",
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
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
  "& .MuiSelect-icon": {
    color: "white",
  },
}));

export const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: "white",
  backgroundColor: "#5695cd",
  "&.Mui-selected": {
    backgroundColor: "#3187d4",
    color: "white",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "#3187d4",
  },
  "&:hover": {
    backgroundColor: "#3187d4",
  },
}));

export const StyledInputLabel = styled(InputLabel)(({ theme }) => ({
  color: "#98bfe1",
  fontWeight: "500",
  "&.Mui-focused": {
    color: "white",
  },
  "&.MuiInputLabel-shrink": {
    color: "98bfe1",
  },
}));
