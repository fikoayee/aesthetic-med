import { WorkingDay } from "@/app/types/working-day.types";

export type WorkingDaysFormProps = {
  workingHours: WorkingDay[];
  onHoursChange: (index: number, field: "start" | "end", value: string) => void;
  onDayOffChange: (index: number) => void;
};
