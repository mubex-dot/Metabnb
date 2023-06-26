import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Modal from "@mui/material/Modal";
import headerLogo from "../assets/headerLogo.svg";

import ModalMenu from "./ModalMenu";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  display: "flex",
  width: 350,
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "20px",
};

const pages = ["Home", "Place to stay", "NFTs", "Community"];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={headerLogo} className="headerLogo" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              textDecoration: "none",
            }}
            className="logoName"
          >
            Metabnb
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "#A02279",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              // letterSpacing: ".3rem",
              color: "blue",
              textDecoration: "none",
              mr: 2,
            }}
            className="logoName"
          >
            Metabnb
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
            className="menuItem"
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "#434343",
                  display: "block",
                  textTransform: "capitalize",
                  //   letterSpacing: ".05rem",
                  //   width: "1%",
                }}
                className="headerItem"
              >
                {page}
              </Button>
            ))}
          </Box>

          <Button
            variant="contained"
            sx={{
              backgroundColor: "#A02279",
              fontWeight: 400,
              textTransform: "capitalize",
              ":hover": {
                color: "#a02279",
                backgroundColor: "#fff",
              },
            }}
            onClick={handleOpen}
          >
            Connect Wallet
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <ModalMenu handleClose={handleClose} />
            </Box>
          </Modal>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
