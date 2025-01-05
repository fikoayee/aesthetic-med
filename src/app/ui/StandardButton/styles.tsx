"use client";
import { Button} from '@mui/material';
import styled from 'styled-components';


export type StyledButtonProps = {
  variant?: string,
  customColor?: string,
  disabled?: boolean,
  };
  export const StyledButton = styled(Button).withConfig({
    shouldForwardProp: (prop: string) => prop !== "variant" && prop !== "customColor" && prop !== "disabled",
  })<StyledButtonProps>(({ variant, customColor, disabled, theme }) => ({
    backgroundColor:
      variant === "contained"
        ? customColor || "#0066fe"
        : variant === "outlined"
        ? "transparent"
        : variant === "custom"
        ? "#ffcc00"
        : "transparent",
    color:
      variant === "contained"
        ? "white"
        : variant === "outlined"
        ? customColor || "#0066fe"
        : variant === "custom"
        ? "#333"
        : customColor || "#0066fe",
    border:
      variant === "outlined" || variant === "custom"
        ? `1px solid ${customColor || "#0066fe"}`
        : "none",
    textTransform: "none",
    fontWeight: "400",
    letterSpacing: "0.075rem",
    borderRadius: "1rem",
    paddingInline: "1rem",
    transition: "all 0.3s ease",
    boxShadow: variant === "contained" ? "0px 4px 15px rgba(0, 0, 0, 0.2)" : "none",
  
    "&:hover": {
      backgroundColor:
        disabled
          ? "gray"
          : variant === "contained"
          ? "#063b88"
          : variant === "outlined"
          ? "rgba(0, 0, 0, 0.08)"
          : variant === "custom"
          ? "#ffaa00"
          : "transparent",
      boxShadow: variant === "contained" ? "0px 6px 20px rgba(0, 0, 0, 0.3)" : "none",
    },
  
    "&:active": {
      backgroundColor:
        disabled
          ? "gray"
          : variant === "contained"
          ? "#0052c7"
          : variant === "outlined"
          ? "rgba(0, 0, 0, 0.15)"
          : variant === "custom"
          ? "#cc9900"
          : "transparent",
      transform: "scale(0.98)",
    },
  
    "&.Mui-disabled": {
      backgroundColor: "lightgray",
      color: "gray",
      border: "none",
      cursor: "not-allowed",
    },
  }));
  
