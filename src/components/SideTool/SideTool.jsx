import React from 'react'
import {Box, Typography, Divider, Badge} from "@mui/material";
import "./sidetool.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HelpIcon from '@mui/icons-material/Help';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
import StorefrontIcon from '@mui/icons-material/Storefront';import {Link} from "react-router-dom"
import {useStateContext} from "../../utils/context/ContextProvider"

const SideTool = ({setOpenMenu}) => {
  const {account,cart} = useStateContext()

  return (
    <>
      <Box className="wholePage" onClick={()=>setOpenMenu(false)}/>
      <Box className="sideContainer">
        <Link to={account.store ? `/store/${account.store}` : "/store/add"} className="link row" onClick={()=>setOpenMenu(false)}>
          <Box className='row'>
            <StorefrontIcon style={{fontSize:"40px", color:"#0E2A47"}}/>
            <Typography variant="subtitle1" color="primary" style={{margin:"5px"}}>My Store</Typography>
          </Box>
        </Link>
        <Box>
          <Link to="cart" className="link row">
            <Badge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon style={{fontSize:"40px", color:"#0E2A47"}}/>
            </Badge>
            <Typography variant="subtitle1" color="primary" style={{margin:"5px"}}>Cart</Typography>
          </Link>
        </Box>
        <Box>
          <NotificationsIcon style={{fontSize:"40px", color:"#0E2A47"}}/>
          <Typography variant="subtitle" color="primary" style={{margin:"5px"}}>Notifications</Typography>
        </Box>
        <Box>
          <SupportAgentIcon style={{fontSize:"40px", color:"#0E2A47"}}/>
          <Typography variant="subtitle" color="primary" style={{margin:"5px"}}>Support</Typography>
        </Box>

        <Box>
          <HelpIcon style={{fontSize:"40px", color:"#0E2A47"}}/>
          <Typography variant="subtitle" color="primary" style={{margin:"5px"}}>Help</Typography>
        </Box>

        <Box>
          <LanguageIcon style={{fontSize:"40px", color:"#0E2A47"}}/>
          <Typography variant="subtitle" color="primary" style={{margin:"5px"}}>Language</Typography>
        </Box>

        <Box>
          <SettingsIcon style={{fontSize:"40px", color:"#0E2A47"}}/>
          <Typography variant="subtitle" color="primary" style={{margin:"5px"}}>Settings</Typography>
        </Box>
    </Box>
    </>
    
  )
}

export default SideTool