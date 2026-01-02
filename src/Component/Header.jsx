import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/Logo5.jpg';
import { Link } from 'react-router-dom';


const pages = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Service", path: "/service" },
  { name: "Contact", path: "/contact" },
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      
      <style>
        {`
          .logo-hover:hover {
            transform: scale(1.06);
            box-shadow: 0px 0px 15px #FFD700;
          }
        `}
      </style>

      <AppBar position="static" sx={{ background: 'black' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>

            <Link to="/" style={{ textDecoration: "none" }}>
              <img
                src={Logo}
                alt="logo"
                className="logo-hover"
                style={{
                  width: 100,
                  height: 84,
                  cursor: "pointer",
                  transition: "0.3s ease",
                  borderRadius: "5px",
                }}
              />
            </Link>

         
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-end' }}>
              <IconButton
                size="large"
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
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                  "& .MuiPaper-root": {
                    backgroundColor: "#000",
                    color: "#fff",
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page.name}
                    component={Link}
                    to={page.path}
                    onClick={handleCloseNavMenu}
                    sx={{
                      position: "relative",
                      backgroundColor: "transparent",
                      color: "#fff",
                      padding: "10px 16px",
                      transition: "0.25s ease",

                      "&:hover": {
                        color: "#FFD700",
                      },

                      "&::after": {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "0%",
                        height: "2px",
                        backgroundColor: "#FFD700",
                        transition: "0.25s ease",
                      },

                      "&:hover::after": {
                        width: "100%",
                      },
                    }}
                  >
                    {page.name}
                  </MenuItem>
                ))}
              </Menu>
            </Box>

           
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page.name}
                  component={Link}
                  to={page.path}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 2,
                    padding: "5px 15px",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "15px",
                    position: "relative",
                    overflow: "hidden",
                    transition: "0.3s",

                    "&:hover": {
                      color: "#FFD700",
                    },

                    "&::before": {
                      content: '""',
                      position: "absolute",
                      width: "0",
                      height: "3px",
                      top: 0,
                      left: 0,
                      backgroundColor: "#FFD700",
                      transition: "width 0.25s ease-in-out",
                    },

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "0",
                      height: "3px",
                      bottom: 0,
                      right: 0,
                      backgroundColor: "#FFD700",
                      transition: "width 0.25s ease-in-out 0.25s",
                    },

                    "&:hover::before": { width: "100%" },
                    "&:hover::after": { width: "100%" },
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

export default Header;
