import { Box, Grid, Typography } from "@mui/material";
// import { motion } from "framer-motion";
// import { useState } from "react";
import { Link } from "react-router-dom";

const NavCard = () => {
  // const [close, setClose] = useState(true);
  // { open, setOpen, openDrawer }
  // const openDrawer= {props.openDrawer}
  // const open= {props.open}
  // const setOpen= {props.setOpen}
  return (
    <Grid
      container
      spacing={2}
      sx={{
        display: open ? "flex-grid" : "none",
        justifyContent: "space-between",
        padding: "10px",
        position: "absolute",
        top: "60px",
        width: "100%",
      }}
    >
      <Grid
        item
        xs={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box>
          <Typography
            component={Link}
            to="/"
            sx={{ textDecoration: "none" }}
            variant="h2"
            color="inherit"
            // onClick={openDrawer}
          >
            Home
          </Typography>
        </Box>
      </Grid>{" "}
      <Grid
        item
        xs={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box>
          <Typography
            component={Link}
            to="/About"
            variant="h2"
            color="inherit"
            sx={{ textDecoration: "none" }}
            // onClick={openDrawer}
          >
            About
          </Typography>
        </Box>
      </Grid>{" "}
      <Grid
        item
        xs={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box>
          <Typography
            component={Link}
            to="/Contact"
            sx={{ textDecoration: "none" }}
            // onClick={openDrawer}
            variant="h2"
            color="inherit"
          >
            Contacts
          </Typography>
        </Box>
      </Grid>{" "}
      <Grid
        item
        xs={5}
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box>
          <Typography
            component={Link}
            sx={{ textDecoration: "none" }}
            // onClick={openDrawer}
            to="/Project"
            variant="h2"
            color="inherit"
          >
            Projects
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default NavCard;
