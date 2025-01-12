import Image from "next/image";
import { LogoTypes } from "./Logo.types";
import { Box } from "@mui/system";
import logo from "../../../../public/assets/svg/logo.svg";
import { StyledBoxWrapper, StyledTypography } from "./styles";

export const Logo = ({}: LogoTypes) => {
  return (
    <StyledBoxWrapper>
      <Image src={logo} alt="app logo" width={70} />
      <StyledTypography>AesMed</StyledTypography>
    </StyledBoxWrapper>
  );
};
