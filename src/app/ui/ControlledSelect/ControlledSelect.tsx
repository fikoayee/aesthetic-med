import { Controller } from "react-hook-form";
import { ControlledSelectProps } from "./ControlledSelect.types";
import { StyledInputLabel, StyledSelect } from "@/app/globalStyles";
import { Checkbox, ListItemText, MenuItem } from "@mui/material";

export const ControlledSelect = ({
  name,
  control,
  label,
  options,
  rules = {},
  disabled,
}: ControlledSelectProps) => (
  <>
    {" "}
    <StyledInputLabel sx={{ marginBottom: "17px" }}>{label}</StyledInputLabel>
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState }) => (
        <>
          <StyledSelect
            multiple
            value={field.value}
            disabled={disabled}
            onChange={(event) => field.onChange(event.target.value)}
            renderValue={(selected) =>
              (selected as string[])
                .map((id) => options.find((opt) => opt.id === id)?.label)
                .join(", ")
            }
            size="small"
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                <Checkbox checked={field.value.includes(option.id)} />
                <ListItemText primary={option.label} />
              </MenuItem>
            ))}
          </StyledSelect>
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
