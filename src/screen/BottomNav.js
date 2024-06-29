import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  colors,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import UpgradeIcon from "@mui/icons-material/Upgrade";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import { ReactComponent as VectorIcon } from "../assets/vector.svg";

function BottomNav({ value, onChange }) {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={onChange}>
        <BottomNavigationAction
          label="Home"
          icon={
            <VectorIcon style={{ width: 20, height: 20, color: "#FFFF22" }} />
          }
        />
        <BottomNavigationAction label="Friends" icon={<GroupIcon />} />
        <BottomNavigationAction label="Upgrade" icon={<UpgradeIcon />} />
        <BottomNavigationAction label="Airdrop" icon={<CardGiftcardIcon />} />
      </BottomNavigation>
    </Paper>
  );
}

export default BottomNav;
