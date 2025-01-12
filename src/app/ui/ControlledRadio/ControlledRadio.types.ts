import { Option } from "@/app/types/option.types";

export type ControlledRadioProps = {
  name: string;
  control: any;
  label?: string;
  options: Option[];
  rules?: object;
  row?: boolean;
  sx?: object;
  disabled?: boolean;
};
