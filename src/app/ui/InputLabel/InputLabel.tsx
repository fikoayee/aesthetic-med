import { StyledInputLabel } from "./styles";
import { InputLabelProps } from "./InputLabel.types";

export const InputLabel = ({ title, sx }: InputLabelProps) => {
  return <StyledInputLabel sx={sx}>{title}</StyledInputLabel>;
};
