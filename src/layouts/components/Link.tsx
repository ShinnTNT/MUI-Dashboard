import { styled } from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";

interface CustomBoxProps extends BoxProps {
  active?: boolean;
}

const Link = styled(Box, {
  shouldForwardProp: (prop: string) => prop !== "active",
})<CustomBoxProps>(({ theme, active }) => ({
  cursor: "pointer",
  color: "black",
  fontSize: 20,
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 140,
  "& > svg": {
    color: active ? theme.palette.primary.main : theme.palette.grey[600],
  },
  "&:hover": {
    "& .MuiTypography-body1": {
      color: theme.palette.primary.main,
    },
    "& > svg": {
      color: theme.palette.primary.main,
    },
  },
  "& .MuiTypography-body1": {
    fontSize: 13,
    fontWeight: 600,
    color: active ? theme.palette.primary.main : theme.palette.grey[900],
    marginLeft: 10,
  },
  ...(active && {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  }),
}));

export default Link;
