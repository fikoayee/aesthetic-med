import { StyledInput, StyledInputLabel } from "@/app/globalStyles";
import { Controller } from "react-hook-form";
import { ControlledInputProps } from "./ControlledInput.types";

export const ControlledInput = ({
  name,
  control,
  label,
  placeholder,
  defaultValue = "",
  disabled,
  rules = {},
}: ControlledInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          <StyledInputLabel sx={{ marginBottom: "-24px" }}>
            {label}
          </StyledInputLabel>
          ;
          <StyledInput
            {...field}
            disabled={disabled}
            placeholder={placeholder}
            size="small"
            error={!!fieldState.error}
          />
          {fieldState.error && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {fieldState.error.message}
            </span>
          )}
        </>
      )}
    />
  );
};
