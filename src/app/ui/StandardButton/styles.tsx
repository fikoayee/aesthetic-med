"use client";
import { Button } from "@mui/material";
import styled from "styled-components";

export type StyledButtonProps = {
  variant?: "contained" | "text" | "outlined" | "custom";
  customColor?: string;
  disabled?: boolean;
  sx?: object;
};
export const StyledButton = styled(Button).withConfig({
  shouldForwardProp: (prop: string) =>
    prop !== "variant" &&
    prop !== "customColor" &&
    prop !== "disabled" &&
    prop !== "width",
})<StyledButtonProps>(({ variant, customColor, disabled, theme }) => ({
  pointerEvents: disabled ? "none" : "all",
  backgroundColor: (() => {
    if (disabled) return theme.palette.action.disabledBackground;
    if (variant === "contained") return customColor || "#0066fe";
    if (variant === "outlined" || variant === "text") return "transparent";
    if (variant === "custom") return "#ffcc00";
    return "transparent";
  })(),
  color: (() => {
    if (disabled) return theme.palette.action.disabled;
    if (variant === "contained") return "white";
    if (variant === "outlined" || variant === "text")
      return customColor || "#0066fe";
    if (variant === "custom") return "#333";
    return customColor || "#0066fe";
  })(),
  border:
    (variant === "outlined" || variant === "custom") && !disabled
      ? `1px solid ${customColor || "#0066fe"}`
      : "none",
  textTransform: "none",
  fontWeight: "400",
  letterSpacing: "0.075rem",
  borderRadius: "1rem",
  paddingInline: variant === "text" ? "0.5rem" : "1rem",
  transition: "all 0.3s ease",
  boxShadow: disabled
    ? "none"
    : variant === "contained"
      ? "0px 4px 15px rgba(0, 0, 0, 0.2)"
      : "none",

  "&:hover": {
    backgroundColor: (() => {
      if (disabled) return theme.palette.action.disabledBackground;
      if (variant === "contained") return "#063b88";
      if (variant === "outlined") return "rgba(0, 0, 0, 0.08)";
      if (variant === "text") return "rgba(0, 102, 254, 0.1)";
      if (variant === "custom") return "#ffaa00";
      return "transparent";
    })(),
    color:
      !disabled && variant === "text" ? customColor || "#0056d2" : undefined,
    boxShadow: disabled
      ? "none"
      : variant === "contained"
        ? "0px 6px 20px rgba(0, 0, 0, 0.3)"
        : "none",
  },

  "&:active": {
    backgroundColor: (() => {
      if (disabled) return theme.palette.action.disabledBackground;
      if (variant === "contained") return "#0052c7";
      if (variant === "outlined") return "rgba(0, 0, 0, 0.15)";
      if (variant === "text") return "rgba(0, 102, 254, 0.2)";
      if (variant === "custom") return "#cc9900";
      return "transparent";
    })(),
    color:
      !disabled && variant === "text" ? customColor || "#0044b0" : undefined,
    transform: !disabled ? "scale(0.98)" : undefined,
  },

  "&.Mui-disabled": {
    backgroundColor: theme.palette.action.disabledBackground,
    color: theme.palette.action.disabled,
    border: "none",
    boxShadow: "none",
  },
}));
