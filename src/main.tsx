import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Index from "./index.tsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#175DFF",
    },
  },
  WHITE: {
    light: "#FFFFFF",
    secondary: "#F3F6F9",
    main: "#F5F6FA",
  },
});

declare module "@mui/material/styles" {
  interface Theme {
    WHITE: {
      light: string;
      secondary: string;
      main: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    WHITE?: {
      light?: string;
      secondary?: string;
      main?: string;
    };
  }
}

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/*" element={<Index />} />)
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
