"use client";
import { InputAdornment, Menu, MenuItem } from "@mui/material";
import styled from "styled-components";

type StyledIconAdornmentProps = {
  isExpanded: boolean;
};
type StyledOptionItemProps = {
  isActive?: boolean;
};

export const StyledIconAdornment = styled(InputAdornment).withConfig({
  shouldForwardProp: (prop: string) => prop !== "isExpanded",
})<StyledIconAdornmentProps>(({ isExpanded, theme }) => ({
  color: "#0066fe",
  display: "flex",
  alignItems: "center",
  transition: "transform 0.3s ease",
  transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
}));

export const StyledOptionItem = styled(MenuItem).withConfig({
  shouldForwardProp: (prop: string) => prop !== "isActive",
})<StyledOptionItemProps>(({ isActive, theme }) => ({
  backgroundColor: isActive ? "#0067fe" : "transparent",
  "&:hover": {
    backgroundColor: "#0848a9",
  },
}));

export const StyledMenu = styled(Menu)({
  "& .MuiMenu-paper": {
    backgroundImage: "linear-gradient(310deg, #161616, #242424)",
    color: "white",
  },
});
