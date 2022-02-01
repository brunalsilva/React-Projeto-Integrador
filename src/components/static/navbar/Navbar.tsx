import React from "react";
import './Navbar.css';
import { AppBar, Box, InputBase, Toolbar } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { Divider, IconButton, ListItemIcon, Menu, MenuItem, Tooltip } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useHistory } from "react-router-dom";
import { Logout, PersonAdd } from "@mui/icons-material";
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import AddIcon from '@mui/icons-material/Add';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useLocalStorage from "react-use-localstorage";

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



  // drop down menu funcoes e estados - inicio
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // drop down menu - fim


  const [token, setToken] = useLocalStorage('token');
  let history = useHistory();

  function goLogout() {
    setToken('')
    alert("Usuário deslogado")
    history.push('/login')
  }

  // variavel para armazenar navbar se o usuario estiver logado 
  var navbarComponent;

  if (token != "") {
    navbarComponent = <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="appbar">
        <Toolbar>
          <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
            <Box display="flex" alignItems="center">
              <Link to='/home' className='text-decoration-none' >
                <img src="./logo.png" alt="" className="navbar-logo" />
              </Link>
              <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <Link to='/home' className='text-decoration-none' >
                  <Typography className="appbar-text color-appbar" variant="h6" component="div" noWrap >
                    Início
                  </Typography>
                </Link>
              </Box>
            </Box>
            <Box display="flex" height={30}>

              <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon className="color-appbar" />
                  </SearchIconWrapper>
                  <StyledInputBase className="color-appbar"
                    placeholder="Buscar..."
                    inputProps={{ 'aria-label': 'search' }}
                  />
                </Search>
              </Box>

              <ShoppingCartIcon className="color-appbar cart-icon" />

              {/* drop down menu e elementos internos */}

              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                  <IconButton
                    className="drop-menu color-appbar"
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleClick}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <MenuIcon />
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    bgcolor: '#D5D52C',
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: '#D5D52C',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <MenuItem>
                  <Link to="/produtos" className="text-decorator-none">
                    <ListItemIcon>
                      <Inventory2Icon />
                    </ListItemIcon>
                    Produtos
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/servicos" className="text-decorator-none">
                    <ListItemIcon>
                      <PersonOutlineRoundedIcon />
                    </ListItemIcon>
                    Serviços
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link to="/formularioProduto" className="text-decorator-none">
                    <ListItemIcon>
                      <AddIcon />
                    </ListItemIcon>
                    Adicionar produto
                  </Link>
                </MenuItem>

                <Divider />
                <MenuItem>
                  <Box onClick={goLogout}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </Box>
                </MenuItem>
              </Menu>

              {/* fim drop down menu */}

            </Box>
          </Box>
        </Toolbar>
        <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon className="color-appbar" />
            </SearchIconWrapper>
            <StyledInputBase className="color-appbar"
              placeholder="Buscar..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>
      </AppBar>
    </Box>

    return (
      <>

        {navbarComponent}
      </>
    )
  } else {


    return (
      
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className="appbar">
          <Toolbar>
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              <Box display="flex" alignItems="center">
                <Link to='/home' className='text-decoration-none' >
                  <img src="./logo.png" alt="" className="navbar-logo" />
                </Link>
                <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
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
              </Box>
              <Box display="flex" height={30}>

                <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon className="color-appbar" />
                    </SearchIconWrapper>
                    <StyledInputBase className="color-appbar"
                      placeholder="Buscar..."
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </Search>
                </Box>

                <ShoppingCartIcon className="color-appbar cart-icon" />
              </Box>
            </Box>
          </Toolbar>
          <Box sx={{ display: { xs: 'flex', sm: 'none' } }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon className="color-appbar" />
              </SearchIconWrapper>
              <StyledInputBase className="color-appbar"
                placeholder="Buscar..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          </Box>
        </AppBar>
      </Box>
    );
  }

}
export default Navbar;