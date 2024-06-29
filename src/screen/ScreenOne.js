import React from "react";
import { Box, Button, Typography, LinearProgress } from "@mui/material";

function ScreenOne() {
  return (
    <Box p={2} textAlign="center" border={1} borderRadius={2}>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h6">Cake Cake Cake</Typography>
        <Button variant="contained" color="primary">
          Exchange
        </Button>
      </Box>
      <Box display="flex" justifyContent="space-around" mb={2}>
        <Typography>+1</Typography>
        <Typography>5.000</Typography>
        <Typography>0</Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="h4">129</Typography>
        <LinearProgress variant="determinate" value={100} />
      </Box>
      <Box mb={2}>
        <img
          src="path/to/cake-image.png"
          alt="Cake"
          style={{ width: "100px" }}
        />
      </Box>
      <Button variant="outlined" color="primary">
        Boost
      </Button>
    </Box>
  );
}

export default ScreenOne;
