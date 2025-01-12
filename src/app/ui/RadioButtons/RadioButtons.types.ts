export type RadioButtonsProps = {
  name: string;
  row?: boolean;
  sx?: object;
  onChange: (selectedGender: string) => void;
  selectedValue: string;
  options: { value: string; label: string }[];
};
