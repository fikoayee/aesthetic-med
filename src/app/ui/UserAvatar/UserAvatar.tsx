import { UserAvatarTypes } from "./UserAvatar.types";
import { Stack } from "@mui/system";
import { StyledAvatar, StyledName, StyledRole } from "./styles";

export const UserAvatar = ({}: UserAvatarTypes) => {
  return (
    <>
      <StyledAvatar alt="Imie Nazwisko" src="/static/images/avatar/1.jpg" />
      <Stack>
        <StyledName>Imie Nazwisko</StyledName>
        <StyledRole>Role</StyledRole>
      </Stack>
    </>
  );
};
