import { Box, CircularProgress, Container } from "@mui/material";

const LoadScreen = () => {
  return (
    <Box
      p={0}
      m={0}
      sx={{
        height: "calc(100vh - 18px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        sx={{
          width: 100,
        }}
      >
        <CircularProgress color="primary" />
      </Container>
    </Box>
  );
};

export default LoadScreen;
