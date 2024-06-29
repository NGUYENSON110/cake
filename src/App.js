import React, { useState } from "react";
import { Container, Box, Paper } from "@mui/material";
import ScreenOne from "./screen/ScreenOne.js";
import ScreenTwo from "./screen/ScreenTwo.js";
import ScreenThree from "./screen/ScreenThree.js";
import BottomNav from "./screen/BottomNav.js";

function App() {
  const [value, setValue] = useState(0);

  return (
    <Container>
      <Box mb={8}>
        {value === 0 && <ScreenOne />}
        {value === 1 && <ScreenTwo />}
        {value === 2 && <ScreenThree />}
      </Box>
      <BottomNav
        value={value}
        onChange={(event, newValue) => setValue(newValue)}
      />
    </Container>
  );
}

export default App;
