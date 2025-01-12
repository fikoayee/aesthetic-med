import { useFormContext, Controller, useFieldArray } from "react-hook-form";
import { StyledCardDescription } from "@/app/globalStyles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { StandardButton } from "@/app/ui/StandardButton/StandardButton";
import { INITIAL_WORKING_HOURS } from "@/app/constants/working-days.const";

export const WorkingDaysForm = () => {
  const { control, setValue, getValues, watch, trigger } = useFormContext();

  const { fields } = useFieldArray({
    control,
    name: "workingHours",
  });

  const handleDayOffToggle = async (index: number) => {
    const currentValues = getValues(`workingHours.${index}`);
    setValue(`workingHours.${index}`, {
      ...currentValues,
      off: !currentValues.off,
      start: !currentValues.off ? "" : currentValues.start,
      end: !currentValues.off ? "" : currentValues.end,
    });
    await trigger(`workingHours.${index}`);
  };

  const workingHours = watch("workingHours");

  return (
    <>
      <StyledCardDescription>
        Specify the working hours for this staff member. You can set fixed hours
        or customize for each day.
      </StyledCardDescription>
      <TableContainer sx={{ overflow: "hidden" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Day</TableCell>
              <TableCell>Start</TableCell>
              <TableCell>End</TableCell>
              <TableCell>Off</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fields.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell>{INITIAL_WORKING_HOURS[index]?.day}</TableCell>
                <TableCell>
                  <Controller
                    name={`workingHours.${index}.start`}
                    control={control}
                    rules={{
                      validate: (value) => {
                        const off = workingHours[index]?.off;
                        if (!off && !value) {
                          return "Start time is required when day is not off.";
                        }
                        if (value && (value < "06:00" || value > "21:00")) {
                          return "Start time must be between 06:00 and 21:00.";
                        }
                        return true;
                      },
                    }}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        type="time"
                        size="small"
                        disabled={workingHours[index]?.off}
                        onChange={(e) => field.onChange(e.target.value)}
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </TableCell>
                <TableCell>
                  <Controller
                    name={`workingHours.${index}.end`}
                    control={control}
                    rules={{
                      validate: (value) => {
                        const off = workingHours[index]?.off;
                        if (!off && !value) {
                          return "End time is required when day is not off.";
                        }
                        if (value && (value < "06:00" || value > "21:00")) {
                          return "End time must be between 06:00 and 21:00.";
                        }
                        return true;
                      },
                    }}
                    render={({ field, fieldState }) => (
                      <TextField
                        {...field}
                        type="time"
                        size="small"
                        disabled={workingHours[index]?.off}
                        onChange={(e) => field.onChange(e.target.value)}
                        error={!!fieldState.error}
                        helperText={fieldState.error?.message}
                      />
                    )}
                  />
                </TableCell>
                <TableCell>
                  <StandardButton
                    variant="contained"
                    title={workingHours[index]?.off ? "Off" : "On"}
                    color={workingHours[index]?.off ? "red" : ""}
                    onClick={() => handleDayOffToggle(index)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
