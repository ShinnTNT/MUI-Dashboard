import Box from "@mui/material/Box";
import Header from "./Header";
import { useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import LoadScreen from "../components/LoadScreen";
import Sidebar from "./Sidebar";

const App = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Header />
      <Box
        height="calc(100vh - 77px)"
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
          marginTop: "76px",
          background: theme.WHITE.secondary,
          paddingTop: "26px",
        }}
      >
        {/* Sidebar */}
        <Box
          height="100%"
          sx={{
            flex: 0.2,
            color: "black",
            background: theme.WHITE.light,
            padding: "10px",
            marginLeft: "10px",
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.shadows[1],
            marginBottom: theme.spacing(2),
          }}
        >
          <Sidebar />
        </Box>
        <Box
          height="100%"
          sx={{
            flex: 1,
            background: theme.WHITE.light,
            overflowY: "scroll",
            padding: "10px",
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.shadows[1],
            marginBottom: theme.spacing(2),
          }}
        >
          <Suspense fallback={<LoadScreen />}>
            <Outlet />
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
};

export default App;
