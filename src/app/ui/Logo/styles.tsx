"use client";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

export const StyledBoxWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
});
export const StyledTypography = styled(Typography)({
  fontSize: "1.6rem",
  fontWeight: "700",
  background: "linear-gradient(90deg, #79acf7, #2396e8)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  display: "inline-block",
});
