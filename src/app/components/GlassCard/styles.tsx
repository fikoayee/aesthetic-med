"use client";
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import styled from 'styled-components';


type StyledCardWrapperProps = {
  maxWidth: string;
};

  export const StyledCardWrapper = styled(Stack).withConfig({
    shouldForwardProp: (prop: string) => prop !== "maxWidth",
  })<StyledCardWrapperProps>(({ maxWidth,theme }) => ({
    display: "flex",
    gap: "1rem",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    paddingInline: "2rem",
    paddingBlock: "3rem",
    borderRadius: "3rem",
    maxWidth: `${maxWidth}px`,
    [theme.breakpoints.down("md")]: {
      marginInline: "0.5rem",
    },
}))

export const StyledTitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: '28px',
  fontWeight: '700',
  background: "linear-gradient(250deg, #ffffff, #f7f7f7 )",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "center", 
}));