import { width } from "@mui/system";
import { StandardButtonProps } from "./StandardButton.types";
import { StyledButton } from "./styles";

export const StandardButton = ({
  title,
  variant,
  color,
  disabled,
  startIcon,
  endIcon,
  sx,
  onClick,
}: StandardButtonProps) => {
  return (
    <StyledButton
      startIcon={startIcon}
      endIcon={endIcon}
      variant={variant}
      onClick={onClick}
      sx={sx}
      disabled={disabled}
      customColor={color}
    >
      {title}
    </StyledButton>
  );
};
