import React from "react";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import { purple, yellow } from "@mui/material/colors";
import { styled } from "@mui/material";
import useWidth from "../../hooks/useWidth";

export const ColorButton = styled(Button)(({ theme }) => ({
  borderRadius: "20px", // Adjust the value for desired rounding
  color: theme.palette.getContrastText(yellow[500]),
  backgroundColor: yellow[500],
  "&:hover": {
    backgroundColor: yellow[700],
  },
}));

const NavBar = () => {
  const appBarStyle = {
    backgroundColor: "#212121",
  };

  //hooks
  const width = useWidth();
  console.log(width);

  return (
    <>
      <AppBar position="static" style={appBarStyle}>
        <Box p={2}>
          <Box alignItems="center" display="flex">
            <Box flexGrow={1}>
              <Avatar src="Amie.png" />
            </Box>
            <Box alignItems="center" display="flex">
              <Box mr={2}>
                <ColorButton variant="contained">About</ColorButton>
              </Box>
              <Box>
                <ColorButton variant="contained">Resume</ColorButton>
              </Box>
              <Box ml={2}>
                <ColorButton variant="contained">Contact</ColorButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </AppBar>
    </>
  );
};

export default NavBar;
