import { Controller } from "react-hook-form";
import { StyledInputLabel, StyledTextArea } from "@/app/globalStyles";
import { ControlledTextAreaProps } from "./ControlledTextArea.types";

export const ControlledTextArea = ({
  name,
  control,
  label,
  placeholder = "",
  defaultValue = "",
  rules = {},
  rows = 4,
  disabled,
}: ControlledTextAreaProps) => (
  <>
    <StyledInputLabel sx={{ marginBottom: "0px", marginTop: "10px" }}>
      {label}
    </StyledInputLabel>
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          <StyledTextArea
            {...field}
            placeholder={placeholder}
            multiline
            rows={rows}
            variant="outlined"
            disabled={disabled}
          />
          {fieldState.error && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {fieldState.error.message}
            </span>
          )}
        </>
      )}
    />
  </>
);
