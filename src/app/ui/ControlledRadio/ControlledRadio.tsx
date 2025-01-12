import { Controller } from "react-hook-form";
import { RadioGroup, FormControlLabel, Radio, Box } from "@mui/material";
import { ControlledRadioProps } from "./ControlledRadio.types";
import { StyledInputLabel } from "@/app/globalStyles";

export const ControlledRadio = ({
  name,
  control,
  label,
  options,
  rules = {},
  row = true,
  disabled,
  sx = {},
}: ControlledRadioProps) => (
  <Box>
    <StyledInputLabel sx={{ marginBottom: "-8px", marginTop: "10px" }}>
      {label}
    </StyledInputLabel>
    <Controller
      name={name}
      control={control}
      rules={rules}
      disabled={disabled}
      render={({ field, fieldState }) => (
        <>
          <RadioGroup
            {...field}
            row={row}
            value={field.value}
            onChange={(event) => field.onChange(event.target.value)}
            sx={sx}
          >
            {options.map((option) => (
              <FormControlLabel
                sx={{ color: "black" }}
                key={option.id}
                value={option.id}
                control={<Radio size="small" />}
                label={option.label}
              />
            ))}
          </RadioGroup>
          {fieldState.error && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {fieldState.error.message}
            </span>
          )}
        </>
      )}
    />
  </Box>
);
