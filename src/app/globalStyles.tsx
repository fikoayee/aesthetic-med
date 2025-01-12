import {
  Divider,
  OutlinedInput,
  Select,
  TextField,
  ToggleButton,
  Typography,
} from "@mui/material";
import styled from "styled-components";

export const StyledInput = styled(OutlinedInput)(({ theme }) => ({
  width: "100%",
  borderRadius: "0.6rem",
  fontWeight: "500",
  fontSize: "15px",
  "& input": {
    textTransform: "capitalize",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#3187d4",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#3187d4",
  },
}));

export const StyledCardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "22px",
  fontWeight: "500",
  background: "linear-gradient(250deg, #00000, #00000 )",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "black",
  textAlign: "start",
}));
export const StyledCardDescription = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: "500",
  background: "linear-gradient(250deg, #00000, #00000 )",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "#7a7a7a",
  textAlign: "start",
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: "0.6rem",
  fontWeight: "500",
  fontSize: "15px",
  marginTop: "-16px",
  "&.Mui-disabled": {
    backgroundColor: theme.palette.action.disabledBackground || "#f5f5f5",
    color: theme.palette.text.disabled || "#9e9e9e",
    borderColor: theme.palette.action.disabled || "#e0e0e0",
    cursor: "not-allowed",
  },
}));

export const StyledTextArea = styled(TextField)(({ theme }) => ({
  width: "100%",
  fontWeight: "500",
  fontSize: "15px",
  height: "100%",
  "& input": {
    textTransform: "capitalize",
  },
  "& .MuiOutlinedInput-root": {
    borderRadius: "0.6rem",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderRadius: "0.6rem",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#3187d4",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#3187d4",
  },
}));

export const StyledDivider = styled(Divider)(({ theme }) => ({
  backgroundColor: "#bdbdbd",
  marginTop: "2px",
  marginBottom: "12px",
  height: "2px",
  opacity: "30%",
  borderRadius: "100rem",
}));

export const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  width: "50%",
  borderRadius: "0.6rem",
  "&.Mui-selected": {
    backgroundColor: "red",
    color: "white",
    "&:hover": {
      backgroundColor: "yellow",
    },
  },
}));
