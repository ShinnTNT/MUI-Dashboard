import { AppBar, styled, useTheme } from "@mui/material";

const CustomAppBar = styled(AppBar)(() => {
  const theme = useTheme();
  return {
    backgroundColor: theme.WHITE.light,
    boxShadow: theme.shadows[0],
    paddingLeft: 20,
    paddingRight: 20,
    height: "76px",
  };
});
export default CustomAppBar;
