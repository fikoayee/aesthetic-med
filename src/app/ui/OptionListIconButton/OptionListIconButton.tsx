import { ExpandMore } from "@mui/icons-material";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import React, { useState } from "react";
import { OptionListIconButtonProps } from "./OptionListIconButton.types";
import { StyledIconAdornment, StyledMenu } from "./styles";
export const OptionListIconButton = ({
  children,
}: OptionListIconButtonProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget as HTMLElement);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const clonedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        onClick: (event) => {
          child.props.onClick?.(event);
          handleClose();
        },
      });
    }
    return child;
  });

  return (
    <Stack>
      <IconButton onClick={handleClick}>
        <StyledIconAdornment
          position="start"
          isExpanded={anchorEl ? true : false}
        >
          <ExpandMore />
        </StyledIconAdornment>
      </IconButton>
      <StyledMenu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {clonedChildren}
      </StyledMenu>
    </Stack>
  );
};
