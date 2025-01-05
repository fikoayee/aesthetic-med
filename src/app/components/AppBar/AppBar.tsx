"use client";

import { Box, Stack } from "@mui/system";
import {
  StyledBoxContainer,
  StyledSearchBar,
  StyledTitleTypography,
  StyledIconAdornment,
} from "./styles";
import SearchIcon from "@mui/icons-material/Search";
import { OptionListIconButton } from "@/app/ui/OptionListIconButton/OptionListIconButton";
import { StyledOptionItem } from "@/app/ui/OptionListIconButton/styles";
import { UserAvatar } from "@/app/ui/UserAvatar/UserAvatar";

export const AppBar = ({}) => {
  return (
    <StyledBoxContainer>
      <StyledTitleTypography>Patients</StyledTitleTypography>
      <StyledSearchBar
        placeholder="Search ..."
        startAdornment={
          <StyledIconAdornment position="start">
            <SearchIcon />
          </StyledIconAdornment>
        }
      />
      <Box sx={{ display: "flex", alignItems: "center", marginLeft: 'auto' }}>
     <UserAvatar/>
        <OptionListIconButton>
          <StyledOptionItem onClick={() => {}}>Profile</StyledOptionItem>
          <StyledOptionItem  onClick={() => {}}>Options</StyledOptionItem>
          <StyledOptionItem  onClick={() => {}}>Logout</StyledOptionItem>
        </OptionListIconButton>
      </Box>
    </StyledBoxContainer>
  );
};
