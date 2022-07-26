import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Link,
  Box,
  Button,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Container,  
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

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
  
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);   

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClickMenu = (link: string) => {
    handleCloseNavMenu();
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
            <Box sx={{ flexGrow: 1, display: { xs: 'none', lg: 'flex' } }}>
                {menuLists.map((menulist, key) => (
                <Button
                    key={key}
                    onClick={() => handleClickMenu(menulist.link)}
                    sx={{ my: 2, mx: 2, color: 'white', display: 'block' }}
                >
                    {menulist.text}
                </Button>
                ))}
                
            </Box>
            <Button sx={{ my: {xs: 1, sm: 2}, display: {xs: 'none', sm: 'block'}, paddingX: '12px', paddingY: '4px', color: 'white', border: 1, borderRadius: '20px' }}
            >
                JOIN DISCORD
            </Button>

            
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', lg: 'none' } }}>
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
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', lg: 'none' },
                }}
                >
                {menuLists.map((menulist, key) => (
                    <MenuItem key={key} onClick={() => handleClickMenu(menulist.link)}>
                    <Typography textAlign="center">{menulist.text}</Typography>
                    </MenuItem>
                ))}
                </Menu>
            </Box>
            {/* <Web3Status /> */}   
            </Box>         
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
