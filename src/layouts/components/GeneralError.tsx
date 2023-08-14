import {
  Box,
  Card,
  CardMedia,
  Container,
  Fab,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";

import ErrorDisplayImage from "@/assets/img/illustrations/here-we-go-again.png";
import { useNavigate } from "react-router-dom";

const GeneralError = () => {
  // Instances
  const theme = useTheme();
  const navigate = useNavigate();

  //   Handlers
  const goBack = () => navigate(-1);
  const goHome = () => navigate("/");

  return (
    <Container
      component="main"
      maxWidth="xl"
      sx={{
        height: "100vh",
        maxHeight: "100vh",
        padding: theme.spacing(4),
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box width={400} maxWidth={400}>
          {/* Error Display Image */}
          <Card
            sx={{
              width: "100%",
              margin: "auto",
              boxShadow: 0,
            }}
          >
            <CardMedia
              component="img"
              width="100%"
              height={380}
              title="Image Title"
              image={ErrorDisplayImage}
            ></CardMedia>
          </Card>
          {/* Error Display Image */}

          <Box
            maxWidth="xs"
            sx={{
              position: "relative",
              zIndex: 1,
              marginTop: 3,
              textAlign: "center",
            }}
          >
            <Typography fontWeight={600} width="100%" color={theme.Error.main}>
              Oops! Something went wrong :'{")"}
            </Typography>

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{
                width: 400,
                marginTop: 4,
                marginBottom: 4,
              }}
            >
              <Box>
                <Fab
                  sx={{
                    width: 120,
                  }}
                  size="small"
                  color="error"
                  variant="extended"
                  aria-label="add"
                  onClick={() => goHome()}
                >
                  <Typography fontWeight={600} fontSize={10}>
                    Back to Home
                  </Typography>
                </Fab>
                <Fab
                  sx={{
                    width: 120,
                    marginLeft: 2,
                  }}
                  size="small"
                  color="inherit"
                  variant="extended"
                  aria-label="add"
                  onClick={() => goBack()}
                >
                  <Typography fontWeight={600} fontSize={10}>
                    Go Back
                  </Typography>
                </Fab>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default GeneralError;
