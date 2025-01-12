import { PageBackgroundProps } from "./PageBackground.types";
import { StyledInnerDiv, StyledMain } from "./styles";

export const PageBackground = ({
  children,
  backgroundName,
  alignItems,
  justifyContent,
}: PageBackgroundProps) => {
  return (
    <StyledMain
      backgroundName={backgroundName || ""}
      justifyContent={justifyContent || "center"}
      alignItems={alignItems || "center"}
    >
      <StyledInnerDiv>{children}</StyledInnerDiv>
    </StyledMain>
  );
};
