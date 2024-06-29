import React from "react";
import { Box, Button, Typography } from "@mui/material";

function ScreenTwo() {
  return (
    <Box p={2} textAlign="center" border={1} borderRadius={2}>
      <Typography variant="h6">INVITE FRIENDS!</Typography>
      <Typography>You and your friend will both receive rewards</Typography>
      <Box my={2}>
        <Button variant="contained" fullWidth>
          +5.000 for you and your friend
        </Button>
      </Box>
      <Box mb={2}>
        <Button variant="contained" fullWidth>
          +25.000 for you and your friend
        </Button>
      </Box>
      <Box mb={2}>
        <Typography>You haven't invited anyone yet</Typography>
      </Box>
      <Button variant="outlined" color="primary" fullWidth>
        Invite friends
      </Button>
    </Box>
  );
}

export default ScreenTwo;
