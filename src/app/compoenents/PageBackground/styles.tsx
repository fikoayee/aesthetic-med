"use client";
import styled from "styled-components";

type StyledMainProps = {
  backgroundName: string;
};

export const StyledMain = styled("main").withConfig({
  shouldForwardProp: (prop: string) => prop !== "backgroundName",
})<StyledMainProps>(({ backgroundName }) => ({
  backgroundImage: `url('/assets/svg/${backgroundName}.svg')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInnerDiv = styled("div")({
  position: "relative",
  zIndex: "1",
  textAlign: "center",
  color: "white",
});
