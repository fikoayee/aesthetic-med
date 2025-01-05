"use client";
import styled from "styled-components";

type StyledMainProps = {
  backgroundName: string;
  alignItems: string;
  justifyContent: string;
};

export const StyledMain = styled("main").withConfig({
  shouldForwardProp: (prop: string) => prop !== "backgroundName" && prop !== "alignItems" && prop !== "justifyContent",
})<StyledMainProps>(({ backgroundName, alignItems, justifyContent }) => ({
  backgroundImage: `url('/assets/svg/${backgroundName}.svg')`,
  backgroundSize: "cover",
  backgroundColor: '#0f0f0f',
  backgroundPosition: "center",
  width: "calc(100vw - 200px)",
  height: "calc(100vh - 70px)",
  display: "flex",
  flexDirection: "column",
  alignItems: alignItems,
  justifyContent: justifyContent,
}));

export const StyledInnerDiv = styled("div")({
  position: "relative",
  zIndex: "1",
  textAlign: "center",
  color: "white",
});
