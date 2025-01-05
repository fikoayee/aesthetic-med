"use client";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { CssBaseline } from "@mui/material";
import { Roboto } from "next/font/google";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Box } from "@mui/system";
import { AppBar } from "./components/AppBar/AppBar";
const theme = createTheme();

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <MuiThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <CssBaseline />
            <Sidebar>
              <Box>
                <AppBar />
                {children}
              </Box>
            </Sidebar>
          </StyledThemeProvider>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
