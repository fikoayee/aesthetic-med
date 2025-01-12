import { GlassCardProps } from "./GlassCard.types";
import { StyledCardWrapper, StyledTitleTypography } from "./styles";

export const GlassCard = ({ children, title, maxWidth }: GlassCardProps) => {
  return (
    <StyledCardWrapper maxWidth={maxWidth || "100%"}>
      <StyledTitleTypography className="text-4xl font-bold">
        {title}
      </StyledTitleTypography>
      {children}
    </StyledCardWrapper>
  );
};
