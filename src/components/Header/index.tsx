import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Link,
  Box,
  Button,
  Menu,
  MenuItem,
  Container,
  Tooltip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";

// import DiscordIcon from "assets/images/discord-brands.svg";
import LogoImage from "../../assets/images/logo.png";
import "./header.scss";

// import Web3Status from "components/Web3Status";

const menuLists = [
  {
    link: "/",
    text: "MYSTERY BOX",
  },
  {
    link: "",
    text: "GAMING WARLOAD",
  },
  {
    link: "",
    text: "OUR STORY",
  },
  {
    link: "",
    text: "GO TO SHOP",
  },  
];

const Header = () => {
  const history = useNavigate();

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleClickMenu = (link: string) => {
    handleCloseUserMenu();
    history(link);
  };

  return (
    <AppBar
      position="static"
      className="appbar"
      sx={{ backgroundColor: "common.black" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{ justifyContent: "space-between", columnGap: "8px" }}
        >
          <Link href="/" className="logo">
            <Box component="img" src={LogoImage} alt="logo" />
          </Link>
          {/* <Box
            className="stakedInfo"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            108 NFT's Staked
            <br />
            in Mining Round 1
          </Box> */}

          <Box sx={{ display: "flex", alignItems: "center", columnGap: "8px" }}>
            <Box
              className="social-buttons"
              sx={{ display: { xs: "none", sm: "flex" } }}
            >
              <Button
                href="https://twitter.com/@neutronminer"
                target="_blank"
                rel="noreferrer"
                className="social-button"
                variant="contained"
                color="primary"
              >
                <TwitterIcon sx={{ color: "#fff" }} />
              </Button>
              <Button
                href="https://t.me/neutronnft"
                target="_blank"
                rel="noreferrer"
                className="social-button"
                variant="contained"
                color="primary"
              >
                <TelegramIcon sx={{ color: "#fff" }} />
              </Button>
              <Button
                href="https://discord.gg/4MKTmJXXby"
                target="_blank"
                rel="noreferrer"
                className="social-button"
                variant="contained"
                color="primary"
              >
                {/* <Box component="img" src={DiscordIcon} alt="" /> */}
              </Button>
            </Box>
            {/* <Web3Status /> */}
            <Box sx={{display: { sm: "block", md: "none" } }}>
                <Tooltip title="Open Menu">
                <Button
                    onClick={handleOpenUserMenu}
                    className="menu-button"
                    variant="contained"
                    color="primary"
                >
                    <MenuIcon sx={{ color: "#fff" }} />
                </Button>
                </Tooltip>
            </Box>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {menuLists.map((list, key) => (
                <MenuItem key={key} onClick={() => handleClickMenu(list.link)}>
                  {list.text}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
