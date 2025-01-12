import { RadioGroup } from "@mui/material";
import { RadioButtonsProps } from "./RadioButtons.types";
import { StyledFormControlLabel, StyledRadio } from "./styles";

export const RadioButtons = ({
  options,
  name,
  row = true,
  sx = {},
  onChange,
  selectedValue,
}: RadioButtonsProps) => {
  return (
    <RadioGroup
      row={row}
      name={name}
      value={selectedValue}
      onChange={(event) => onChange(event.target.value)}
      sx={sx}
    >
      {options.map((option) => (
        <StyledFormControlLabel
          key={option.value}
          value={option.value}
          control={<StyledRadio size="x-small" />}
          label={option.label}
        />
      ))}
    </RadioGroup>
  );
};
