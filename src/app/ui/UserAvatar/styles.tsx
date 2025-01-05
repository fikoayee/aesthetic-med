"use client";
import { Avatar, Typography } from '@mui/material';
import styled from 'styled-components';


export const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 42,
    height: 42,
    backgroundColor: "#161616",
    color: "#0066fe",
    marginRight: '0.5rem'
  }));
  
  export const StyledName = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    fontWeight: "500",
    background: "linear-gradient(250deg, #ffffff, #f7f7f7 )",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textAlign: "center",
  }));
  
  export const StyledRole = styled(Typography)(({ theme }) => ({
    fontSize: "13px",
    fontWeight: "400",
    color: "#5e5e5e",
    marginTop: '-8px',
    textAlign: "start",
    textTransform: 'uppercase'
  }));