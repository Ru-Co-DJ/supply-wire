import React from 'react'
import {Box, Typography, Divider} from "@mui/material";
import "./sidetool.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HelpIcon from '@mui/icons-material/Help';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';
const SideTool = () => {
  return (
    <Box className="sideContainer">
        <Box>
          <ShoppingCartIcon style={{fontSize:"40px", color:"#fff"}}/>
          <Typography variant="subtitle1" color="info.main">Cart</Typography>
        </Box>
        <Divider color="#fff"/>
        <Box>
          <NotificationsIcon style={{fontSize:"40px", color:"#fff"}}/>
          <Typography variant="subtitle" color="info.main">Notification</Typography>
        </Box>
        <Divider color="#fff"/>

        <Box>
          <SupportAgentIcon style={{fontSize:"40px", color:"#fff"}}/>
          <Typography variant="subtitle" color="info.main">Support</Typography>
        </Box>
        <Divider color="#fff"/>

        <Box>
          <HelpIcon style={{fontSize:"40px", color:"#fff"}}/>
          <Typography variant="subtitle" color="info.main">Help</Typography>
        </Box>
        <Divider color="#fff"/>

        <Box>
          <LanguageIcon style={{fontSize:"40px", color:"#fff"}}/>
          <Typography variant="subtitle" color="info.main">Language</Typography>
        </Box>
        <Divider color="#fff"/>

        <Box>
          <SettingsIcon style={{fontSize:"40px", color:"#fff"}}/>
          <Typography variant="subtitle" color="info.main">Settings</Typography>
        </Box>
    </Box>
  )
}

export default SideTool