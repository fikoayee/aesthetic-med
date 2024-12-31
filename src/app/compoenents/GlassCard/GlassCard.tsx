import { GlassCardProps } from "./GlassCard.types";
import { StyledCardWrapper, StyledTitleTypography } from "./styles";

export const GlassCard = ({ children, title }: GlassCardProps) => {
  return (
    <StyledCardWrapper>
      <StyledTitleTypography className="text-4xl font-bold">
        {title}
      </StyledTitleTypography>
      {children}
    </StyledCardWrapper>
  );
};
