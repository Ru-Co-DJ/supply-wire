import React, {useState, useEffect} from 'react'
import "./navbar.css"
import { Box, Typography, AppBar, Toolbar, Button, Avatar, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { useStateContext } from '../../utils/context/ContextProvider'
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import SideTool from '../SideTool/SideTool';

const Navbar = () => {
  const {account} = useStateContext();
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <Box style={{maxHeight:"100%"}}>
    <AppBar elevation={0} color="primary" position="sticky" style={{marginBottom:"20px", height:"60px", position:"fixed",zIndex:"15"}}>
      <Toolbar className="navContainer">
        <Box className="row">
          <Link to="/" className="link">
            <Typography variant="h5" color="info.main" >SupplyWire</Typography>
          </Link>
        </Box>
        <Box className="row">
          <Box className="navOptions">
            <Typography variant="subtitle1" color="info.main">Today's sales</Typography>
          </Box>
          <Box className="navOptions">
          <Link to="/products/all" className="link">
            <Typography variant="subtitle1" color="info.main">By category</Typography>
          </Link>
          </Box>
          <Box className="navOptions">
            <Typography variant="subtitle1" color="info.main">Customer service</Typography>
          </Box>
          <Box className="navOptions">
            <Link to="/stores" className="link">
              <Typography variant="subtitle1" color="info.main">Stores</Typography>
            </Link>
          </Box>
        </Box>
        <Box className="row">
        {
          !account?.fullName ? (
            <Box className='row'>
              <Link to="/auth/login" className="link">
                <Button variant="text" style={{marginRight:"10px"}}>
                  <Typography variant="body1" color="info.main">Login</Typography>
                </Button>
              </Link>
              <Link to="/auth/signup" className="link">
                <Button variant="text" style={{marginRight:"10px"}}>
                  <Typography variant="body1" color="info.main">Sign Up</Typography>
                </Button>
              </Link>
              </Box>
          ):(
            <Box className="row">
              <Avatar sx={{ width: 30, height: 30 }} style={{marginTop:"3px"}}>{account.fullName.toUpperCase()[0]}</Avatar>
              <Typography variant="subtitle1" style={{margin:"5px"}}>{account.fullName}</Typography>
            </Box>
          )
        }
        {
          !openMenu ? (
            <>
              <MenuIcon onClick={()=>setOpenMenu(true)} style={{cursor:"pointer", marginTop:"10px"}}/>
            </>
          ):(
            <>
              <MenuOpenIcon onClick={()=>setOpenMenu(false)} style={{cursor:"pointer", marginTop:"10px"}}/>
              <SideTool setOpenMenu={setOpenMenu}/>
            </>
          )
        }
        </Box>

      </Toolbar>
    </AppBar>
    <Box className="goUp">
      <Tooltip title="go up" onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}>
        <ArrowCircleUpIcon color="primary" style={{fontSize:"35px"}}/>
      </Tooltip>
    </Box>
    </Box>
  )
}

export default Navbar