import { ListItemButtonProps } from "./ListItemButton.types";
import Image from "next/image";
import { StyledButton } from "./styles";
export const ListItemButton = ({
  title,
  icon,
  iconActive,
  selected,
  onClick,
}: ListItemButtonProps) => {
  return (
    <StyledButton
      selected={selected}
      startIcon={
        <Image
          src={selected ? iconActive : icon}
          alt="patients icon"
          width={16}
          height={16}
          style={{ marginRight: "8px" }}
        />
      }
      onClick={onClick}
    >
      {title}
    </StyledButton>
  );
};
