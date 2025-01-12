export type StandardButtonProps = {
  title: string;
  variant?: "contained" | "text" | "outlined" | "custom";
  color?: string;
  disabled?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  sx?: object;
  onClick?: () => void;
};
