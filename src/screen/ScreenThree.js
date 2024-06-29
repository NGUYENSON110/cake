import React from "react";
import {
  Box,
  Button,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function ScreenThree() {
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
      <List>
        <ListItem>
          <ListItemText primary="Anglabel +5.000" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Deluxe66 +25.000" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Anglabel +5.000" />
        </ListItem>
      </List>
      <Button variant="outlined" color="primary" fullWidth>
        Invite friends
      </Button>
    </Box>
  );
}

export default ScreenThree;
