"use client";
import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import styled from 'styled-components';

export const StyledCardWrapper = styled(Stack)(({ theme }) => {
  return {
    display: "flex",
    gap: "1rem",
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    paddingInline: "2rem",
    paddingBlock: "3rem",
    borderRadius: "3rem",
    [theme.breakpoints.down("md")]: {
      marginInline: "0.5rem",
    },
  };
});

export const StyledTitleTypography = styled(Typography)(({ theme }) => ({
  fontSize: '28px',
  fontWeight: '700',
  background: "linear-gradient(250deg, #ffffff, #f7f7f7 )",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  textAlign: "center", 
}));