import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardMedia,
  Container,
  Typography,
  useTheme,
} from "@mui/material";

// Display Image
import image from "@/assets/img/illustrations/not-found.svg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  // Instances
  const theme = useTheme();
  const navigate = useNavigate();

  //   Handlers
  const goHome = () => navigate("/");
  const goBack = () => navigate(-1);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <Container
        sx={{
          height: "100%",
          padding: theme.spacing(4),
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            boxShadow: "none",
          }}
        >
          <CardMedia width="100%" component="img" src={image} alt="Image" />
        </Card>

        <Box
          marginLeft={8}
          width={550}
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography fontWeight={900} fontSize={40}>
              Nothing to see here
            </Typography>
            <Typography color={theme.palette.grey[500]} fontSize={18}>
              Oops! It seems we've encountered a celestial anomaly. Page you are
              trying to open does not exist. You may have mistyped the address,
              or the page has been moved to another URL.
            </Typography>
            <ButtonGroup
              sx={{
                marginTop: 4,
              }}
            >
              <Button onClick={goHome}>
                <Typography fontWeight={600} fontSize={14}>
                  Back to Home
                </Typography>
              </Button>
              <Button onClick={goBack}>
                <Typography fontWeight={600} fontSize={14}>
                  Go Back
                </Typography>
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
