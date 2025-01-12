import { DaysOfWeek } from "../enums/DaysOfWeek.enum";
import { WorkingDay } from "../types/working-day.types";

export const INITIAL_WORKING_HOURS: WorkingDay[] = [
  { day: DaysOfWeek.MONDAY, start: "08:00", end: "16:00", off: false },
  { day: DaysOfWeek.TUESDAY, start: "08:00", end: "16:00", off: false },
  { day: DaysOfWeek.WEDNESDAY, start: "08:00", end: "16:00", off: false },
  { day: DaysOfWeek.THURSDAY, start: "08:00", end: "16:00", off: false },
  { day: DaysOfWeek.FRIDAY, start: "08:00", end: "16:00", off: false },
  { day: DaysOfWeek.SATURDAY, start: "00:00", end: "00:00", off: true },
];
