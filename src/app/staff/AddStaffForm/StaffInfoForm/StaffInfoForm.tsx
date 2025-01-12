import { Controller, useFormContext, useWatch } from "react-hook-form";
import { StyledInputLabel, StyledToggleButton } from "@/app/globalStyles";
import { Grid2, ToggleButtonGroup } from "@mui/material";
import { Stack } from "@mui/system";
import { SPECIALIZATIONS } from "@/app/constants/specialization.const";
import { GENDERS } from "@/app/constants/gender.const";
import { StaffInfoFormProps } from "./StaffInfoForm.types";
import { ControlledInput } from "@/app/ui/ControlledInput/ControlledInput";
import { ControlledSelect } from "@/app/ui/ControlledSelect/ControlledSelect";
import { ControlledRadio } from "@/app/ui/ControlledRadio/ControlledRadio";
import { ControlledTextArea } from "@/app/ui/ControlledTextArea/ControlledTextArea";
import { useEffect } from "react";
export const StaffInfoForm = ({}: StaffInfoFormProps) => {
  const { control, setValue } = useFormContext();
  const role = useWatch({
    control,
    name: "role",
  });

  useEffect(() => {
    if (role === "receptionist") {
      setValue("specializations", []);
    }
  }, [role, setValue]);

  return (
    <>
      <Grid2 size={{ xs: 12, sm: 12 }}>
        <ControlledInput
          name="firstName"
          control={control}
          label="First Name"
          placeholder="John"
          rules={{ required: "First name is required" }}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 12 }}>
        <ControlledInput
          name="lastName"
          control={control}
          label="Last Name"
          placeholder="Doe"
          rules={{ required: "Last name is required" }}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6 }}>
        <ControlledInput
          name="phone"
          control={control}
          label="Phone Number"
          placeholder="123-456-789"
          rules={{
            required: "Phone number is required",
            pattern: {
              value: /^\d{3}-\d{3}-\d{3}$/,
              message: "Invalid phone format (123-456-789)",
            },
          }}
        />
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 6 }}>
        <ControlledInput
          name="email"
          control={control}
          label="Email"
          placeholder="example@mail.com"
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^@]+@[^@]+\.[^@]+$/,
              message: "Invalid email format",
            },
          }}
        />
      </Grid2>
      <StyledInputLabel>Role</StyledInputLabel>
      <Controller
        name="role"
        control={control}
        render={({ field }) => (
          <ToggleButtonGroup
            {...field}
            exclusive
            size="small"
            sx={{ width: "500px", marginTop: "-16px" }}
          >
            <StyledToggleButton value="specialist">
              Specialist
            </StyledToggleButton>
            <StyledToggleButton value="receptionist">
              Receptionist
            </StyledToggleButton>
          </ToggleButtonGroup>
        )}
      />
      <Stack sx={{ width: "100%" }}>
        <ControlledSelect
          name="specializations"
          control={control}
          label="Specializations"
          options={SPECIALIZATIONS}
          rules={{
            validate: (value: []) =>
              value.length > 0 ||
              "At least one specialization must be selected",
          }}
          disabled={role === "receptionist"}
        />
        <ControlledRadio
          name="gender"
          control={control}
          label="Gender"
          options={GENDERS}
          rules={{
            required: "Gender is required",
          }}
        />
        <ControlledTextArea
          name="additionalInfo"
          control={control}
          label="Additional information"
          placeholder="Add note"
          rules={{
            maxLength: {
              value: 500,
              message: "Note cannot exceed 500 characters",
            },
          }}
        />
      </Stack>
    </>
  );
};
