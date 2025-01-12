import { Option } from "@/app/types/option.types";

export type ControlledSelectProps = {
  name: string;
  control: any;
  label?: string;
  options: Option[];
  rules?: object;
  disabled?: boolean;
};
