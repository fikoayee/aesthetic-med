"use client";
import { Box, Stack } from "@mui/system";
import styled from "styled-components";

type StyledModalWrapperProps = {
  isOpen?: boolean;
};
type StyledModalContainer = {
  isOpen?: boolean;
};

export const StyledModalContainer = styled(Box).withConfig({
  shouldForwardProp: (prop: string) => prop !== "isOpen",
})<StyledModalWrapperProps>(({ isOpen, theme }) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  opacity: isOpen ? 1 : 0,
  alignItems: "center",
  justifyContent: "end",
  transition: "opacity 0.3s ease-in-out",
  zIndex: 1000,
  paddingRight: "15px",
}));

export const StyledModalWrapper = styled(Stack).withConfig({
  shouldForwardProp: (prop: string) => prop !== "isOpen",
})<StyledModalWrapperProps>(({ isOpen, theme }) => ({
  backgroundColor: "white",
  borderRadius: 15,
  boxShadow: "24px",
  width: "500px",
  height: "95%",
  paddingInline: "10px",
  paddingTop: "10px",
  paddingBottom: "10px",
  transform: isOpen ? "translateX(0)" : "translateX(100%)",
  transition: "transform 0.3s ease-in-out",
}));
