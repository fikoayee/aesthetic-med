import { StandardButtonProps } from "./StandardButton.types";
import { StyledButton } from "./styles";

export const StandardButton = ({
  title,
  variant,
  color,
  disabled,
  startIcon,
  endIcon,
}: StandardButtonProps) => {
  return (
    <StyledButton
      startIcon={startIcon}
      endIcon={endIcon}
      variant={variant}
      disabled={disabled}
      customColor={color}
    >
      {title}
    </StyledButton>
  );
};
