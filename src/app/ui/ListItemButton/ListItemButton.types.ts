import { ReactNode } from "react";

export type ListItemButtonProps = {
  title: string;
  icon: string;
  iconActive: string;
  selected: boolean;
  onClick: () => void;
};
