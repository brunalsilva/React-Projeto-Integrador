import React from "react";
import './Navbar.css';
import { AppBar, Box, InputBase, Toolbar } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { IconButton } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function Navbar() {
  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appbar">
        <Toolbar>
          <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
            <Box display="flex" alignItems="center">
              <Link to='/home' className='text-decoration-none' >
                <img src="./logo.png" alt="" className="navbar-logo" />
              </Link>
              <Link to='/home' className='text-decoration-none' >
                <Typography className="appbar-text color-appbar" variant="h6" component="div" noWrap >
                  Início
                </Typography>
              </Link>
              <Link to='/login' className='text-decoration-none' >
                <Typography className="appbar-text color-appbar" variant="h6" component="div" noWrap >
                  Login
                </Typography>
              </Link>
              <Link to='/cadastrousuario' className='text-decoration-none' >
                <Typography className="appbar-text color-appbar" variant="h6" component="div" noWrap >
                  Cadastre-se
                </Typography>
              </Link>
            </Box>
            <Box display="flex" height={30}>

              <Search>
                <SearchIconWrapper>
                  <SearchIcon className="color-appbar" />
                </SearchIconWrapper>
                <StyledInputBase className="color-appbar"
                  placeholder="Buscar..."
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>

              <ShoppingCartIcon  className="color-appbar cart-icon"/>

              <IconButton className="drop-menu color-appbar" size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
                <MenuIcon />
              </IconButton>

            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;