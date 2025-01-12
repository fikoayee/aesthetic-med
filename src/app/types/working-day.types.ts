import { DaysOfWeek } from "../enums/DaysOfWeek.enum";

export type WorkingDay = {
  day: DaysOfWeek;
  start: string;
  end: string;
  off: boolean;
};
