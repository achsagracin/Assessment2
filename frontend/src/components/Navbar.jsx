//Write your missing code here
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import{Link} from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home';
import AddBoxIcon from '@mui/icons-material/AddBox';



const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'purple' }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            EmployeeApp
          </Typography>
          <Link to={'/'}><Button color="inherit" startIcon={<HomeIcon sx={{ color: 'white' }}/>}></Button></Link>
          <Link to={'/add'}><Button color="inherit" startIcon={<AddBoxIcon sx={{ color: 'white' }}/>}></Button></Link>

         </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;





