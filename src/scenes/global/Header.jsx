import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {
  React.useEffect(()=>{
    const token = localStorage.getItem('token')
    if(token){
      window.location.href = '/'
    }
  },[])
  return (
    <Box sx={{ backgroundColor:"#3066be"}}>
      <AppBar position="static" sx={{backgroundColor:"#3066be",width:"1480px",margin:"auto",boxShadow:"none"}}>
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h3" component="div" sx={{ flexGrow: 1,fontWeight:"bold" }}>
            PMS
          </Typography>
          <Box sx={{ }}>
          <Button color="inherit" sx={{fontWeight:"bold",fontSize:"16px" }} >Sign Up</Button>
          <Button color="inherit" sx={{fontWeight:"bold",fontSize:"16px" }} >Sign In</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
