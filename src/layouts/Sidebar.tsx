import { Box, Button, Typography, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import useCurrentNav from "../hooks/useCurrentNav";
import navlinks, { NavLink } from "../assets/navlinks";
import { useNavigate } from "react-router-dom";

interface ActiveLink {
  index: number;
}

const Sidebar = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState<ActiveLink | null>(null);

  const { currentNav, activeTab } = useCurrentNav();

  const links =
    activeTab &&
    navlinks[activeTab].map((link: NavLink) => {
      const active = link.link === currentNav?.link;
      return (
        <Button
          sx={{
            width: "100%",
          }}
          onClick={() => {
            navigate(link.link);
          }}
        >
          <Box width="100%" display="flex" alignItems="center">
            <Box
              sx={{
                width: 35,
                height: 35,
                backgroundColor: active
                  ? theme.palette.primary.main
                  : "transparent",
                color: active ? "white" : "gray",
                borderRadius: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {link.icon}
            </Box>
            <Typography
              marginLeft={2}
              color={active ? theme.palette.primary.main : "gray"}
              fontWeight={active ? 600 : 500}
              textTransform="capitalize"
              fontSize={14}
            >
              {link.title}
            </Typography>
          </Box>
        </Button>
      );
    });

  useEffect(() => {
    if (currentNav) {
      setActiveLink({
        index:
          (navlinks &&
            navlinks[activeTab].findIndex(
              (item) => item.label === currentNav.label
            )) ||
          0,
      });
    }
  }, [currentNav, activeTab]);

  return (
    <Box position="relative" height="100%">
      {...links}
      <Box
        sx={{
          position: "absolute",
          top: activeLink && `calc(${activeLink?.index} * 46px)`,
          right: -10,
          height: 47,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          transition: "top 0.4s cubic-bezier(.47,1.64,.41,.8)",
        }}
      >
        <Box
          sx={{
            width: 2.5,
            height: 34,
            borderRadius: 200,
            background: theme.palette.primary.main,
          }}
        />
      </Box>
    </Box>
  );
};

export default Sidebar;
