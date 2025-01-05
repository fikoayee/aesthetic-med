"use client";
import {
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  height: "70px",
  display: "flex",
  alignItems: "center",
  paddingInline: "1rem",
  backgroundColor: "#0f0f0f",
  paddingLeft: '30px'
}));

export const StyledTitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: "700",
  background: "linear-gradient(250deg, #ffffff, #f7f7f7 )",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "center",
}));

export const StyledSearchBar = styled(OutlinedInput)(({ theme }) => ({
  width: "400px",
  height: "40px",
  fontWeight: "100",
  borderRadius: "1rem",
  backgroundColor: "#161616",
  marginLeft: 'calc((100vw - 340px)/3)',
  color: "white",
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "transparent",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#0848a9",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#0066fe",
    borderWidth: "1px",
  },
  "&.Mui-focused": {
    backgroundColor: "#202020",
  },
}));

export const StyledIconAdornment = styled(InputAdornment)(({ theme }) => ({
  color: "#0848a9",
  ".Mui-focused &": {
    color: "#0066fe",
  },
}));

