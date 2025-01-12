"use client";
import { Box } from "@mui/system";
import { ListItemButton } from "@/app/ui/ListItemButton/ListItemButton";
import { useNavigation } from "@/app/hooks/useNavigation";
import {
  StyledBoxContainer,
  StyledSpacer,
  StyledTypographyDivider,
} from "./styles";
import { Logo } from "@/app/ui/Logo/Logo";
import { SidebarProps } from "./Sidebar.Types";

export const Sidebar = ({ children }: SidebarProps) => {
  const { navigation, navigate } = useNavigation();
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <StyledBoxContainer>
        <Logo />
        <StyledSpacer />
        <ListItemButton
          icon={navigation[0].icon}
          iconActive={navigation[0].iconActive}
          selected={navigation[0].selected}
          title={navigation[0].title}
          onClick={() => navigate(navigation[0].path)}
        ></ListItemButton>
        <StyledTypographyDivider>Clinic</StyledTypographyDivider>
        {navigation.slice(1, 5).map((item) => (
          <ListItemButton
            key={item.path}
            icon={item.icon}
            iconActive={item.iconActive}
            selected={item.selected}
            title={item.title}
            onClick={() => navigate(item.path)}
          />
        ))}
        <StyledTypographyDivider>Management</StyledTypographyDivider>
        {navigation.slice(5, 7).map((item) => (
          <ListItemButton
            key={item.path}
            icon={item.icon}
            iconActive={item.iconActive}
            selected={item.selected}
            title={item.title}
            onClick={() => navigate(item.path)}
          />
        ))}
      </StyledBoxContainer>
      {children}
    </Box>
  );
};
