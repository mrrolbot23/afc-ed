import * as React from 'react';
import {ChangeEvent, FormEvent, useState} from 'react';
import {AppBar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography} from '@mui/material/';
import MenuIcon from '@mui/icons-material/Menu';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import {Link, Outlet, useNavigate} from "react-router-dom";
import {TextField} from "@mui/material";


function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const [movieName, setMovieName] = useState("")

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMovieName(event.target.value)
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    navigate("/Search", {state: {key: movieName}})
  }

  return (
    <>
      <AppBar sx={{backgroundColor: "#0F0F0F", color: "red"}} position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link className="navbar-brand" to={"/"}>
              <LiveTvIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 2}}/>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: {xs: 'none', md: 'flex'},
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.2rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                JumpCut
              </Typography>
            </Link>

            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon/>
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
                  display: {xs: 'block', md: 'none'},
                }}
              >
                <Link className="link" to="/">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Home</Typography>
                  </MenuItem>
                </Link>

                <Link className="link" to="/Now Playing">
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">Now Playing</Typography>
                  </MenuItem>
                </Link>

              </Menu>
            </Box>
            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
              <Link className="link" to="Now Playing">
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{my: 2, color: 'white', display: 'block'}}
                >
                  Now Playing
                </Button>
              </Link>
            </Box>
            <form onSubmit={handleSubmit}>
              <TextField
                id="searchInput"
                onChange={handleChange}
                sx={{backgroundColor: "antiquewhite", padding: "5px", borderRadius: "5px"}}
                placeholder="Search..."
                color="error"
                variant="standard"
              />
              <Button sx={{marginLeft: "10px", marginTop: "4px"}} color="error" variant="contained"
                      type="submit">Search</Button>
            </form>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet/>
    </>
  );
}

export default ResponsiveAppBar;
