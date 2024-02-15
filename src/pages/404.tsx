import { Stack, Typography } from "@mui/material";
import animationData from "json/lottie/404.json";
import Lottie from "lottie-react";

const NotFound = () => {
  return (
    <Stack
      direction="column"
      spacing={1}
      justifyContent="center"
      alignItems="center"
    >
      <Lottie
        animationData={animationData}
        loop
        style={{
          height: 300,
          width: 300
        }}
        height={300}
        width={300}
      />
      <Typography variant="h1">Page not found</Typography>
    </Stack>
  );
};

export default NotFound;
