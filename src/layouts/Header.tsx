import CustomAppBar from "./components/CustomAppBar";
import { Avatar, Box, Grid, IconButton, Typography } from "@mui/material";

import Logo from "@/assets/img/illustrations/08_Supreme.jpg";
import Link from "./components/Link";
import {
  Activity,
  ArrangeHorizontal,
  Filter,
  Message2,
  Profile2User,
} from "iconsax-react";
import useCurrentNav from "../hooks/useCurrentNav";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = () => {
  //  Instances
  const navigate = useNavigate();

  const { activeTab, setActiveTab } = useCurrentNav();

  useEffect(() => {
    console.log(activeTab, "active tab");
  }, [activeTab]);

  const links = [
    <Link
      onClick={() => {
        setActiveTab("conversation");
        navigate("/conversation/all-conversation");
      }}
      active={activeTab === "conversation"}
    >
      <Message2 size={22} />
      <Typography>Conversation</Typography>
    </Link>,
    <Link
      onClick={() => {
        setActiveTab("campaign");
        navigate("/campaign/current-users");
      }}
      active={activeTab === "campaign"}
    >
      <Activity size={22} />
      <Typography>Compaigns</Typography>
    </Link>,
    <Link>
      <Profile2User size={22} />
      <Typography>Contacts</Typography>
    </Link>,
    <Link>
      <Filter size={22} />
      <Typography>Pipeline</Typography>
    </Link>,
  ];

  return (
    <CustomAppBar>
      <Grid container>
        <Grid item md={3}>
          <IconButton>
            <img src={Logo} width={140} height={60} />
          </IconButton>
        </Grid>
        <Grid item md={7}>
          <Box
            sx={{
              display: "flex",
              height: "100%",
            }}
          >
            {...links}
          </Box>
        </Grid>
        <Grid item md={2}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
            height="100%"
          >
            <Avatar />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                ml={1}
                mr={2}
                sx={{
                  fontSize: 12,
                  fontWeight: 600,
                }}
                color="black"
              >
                Shinn
              </Typography>
              <ArrangeHorizontal size={14} color="blue" />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </CustomAppBar>
  );
};

export default Header;
