"use client";
import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import styled from 'styled-components';


type StyledButtonProps = {
    selected: boolean;
  };
  
    export const StyledButton = styled(Button).withConfig({
      shouldForwardProp: (prop: string) => prop !== "selected",
    })<StyledButtonProps>(({ selected, theme }) => ({
    textTransform: 'none',
    color: selected? 'white' : '#bbbbbb',
    fontWeight: '400',
    letterSpacing: '0.6px',
    width: '98%',
    backgroundColor: selected? '#0067fe' : 'transparent',
    borderRadius: '0.75rem',
    justifyContent: 'flex-start', 
    alignItems: 'center',       
    paddingLeft: '16px',
    marginBlock: '1px',
    '&:hover': {
        backgroundColor: '#024ab7',
        color: 'white'
    },
   

}));
