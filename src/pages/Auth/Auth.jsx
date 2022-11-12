import React,{useState, useEffect} from 'react'
import "./auth.css"
import { Box, Typography, TextField, Button, Select, MenuItem, InputLabel, FormControl, FormControlLabel, Checkbox } from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'
import { useStateContext } from '../../utils/context/ContextProvider'
import { login } from '../../api'
import { useLazyQuery, useQuery } from '@apollo/client'


const Auth = () => {
  const [choice, setChoice]=useState("")
  const location = useLocation()
  const navigate = useNavigate()
  const path = location.pathname.split("/")[2];
  const {account, setAccount} = useStateContext()
  const [cred, setCred] = useState({})
  const [loginClick, setLoginClick] = useState(false)

  const [loadLogin, { called, loading, error, data }] = useLazyQuery(login,{variables:{email:cred.email, password:cred.password}});
  // const {loading, error, data} = useQuery(login, {variables:{email:cred.email, password:cred.password}})
  
  useEffect(()=>{
    if(called && !loading){
      setAccount(data.user)
      localStorage.setItem("account",JSON.stringify(data.user))
      navigate("/",{replace:true})
    }
  },[called, data])






  return (
    <Box className="authContainer">
      {
        path === "login" ? (
          <>
            <Box style={{marginBottom:"20px"}}>
              <Typography variant="h4" color="primary">Login</Typography>
            </Box>
            <Box className="authInpLogin">
              <TextField label="email" variant="standard" style={{marginTop:"20px"}} onChange={(e)=>setCred(prev=>({...prev,email:e.target.value}))}/>
              <TextField label="password" type="password" variant="standard" style={{marginTop:"20px"}} onChange={(e)=>setCred(prev=>({...prev,password:e.target.value}))}/>
              <Button variant='contained' style={{marginTop:"20px", marginBottom:"30px"}} onClick={()=>{loadLogin()}}>Login</Button>
            </Box>
          </>
        ):(
        <>
          <Box style={{marginBottom:"20px"}}>
            <Typography variant="h4" color="primary">Sign up</Typography>
          </Box>
          <Box className="authInpSign">
            <Box>
              <TextField variant="standard" label="First name" style={{marginRight:"5px"}}/>
              <TextField variant="standard" label="Last Name" style={{marginLeft:"5px"}}/>
            </Box>
            <TextField variant="standard" label="Email" style={{margin:"10px"}}/>
            <TextField variant="standard" type="password" label="Password" style={{margin:"10px"}}/>
            <TextField variant="standard" type="password" label="Re-Password" style={{margin:"10px"}}/>
        
            <FormControl variant="standard" style={{minWidth:"50%", margin:"10px"}}>
            <InputLabel>Account Type</InputLabel>
            <Select value={choice} onChange={(e)=>setChoice(e.target.value)}>
              <MenuItem value={"customer"}>Customer</MenuItem>
              <MenuItem value={"owner"}>Store owner</MenuItem>
            </Select>
            </FormControl>
            <FormControlLabel control={<Checkbox  color="secondary"/>} label="Send me updates and offers" />
            <Button variant='contained' style={{marginTop:"20px", width:"100px", marginBottom:"30px"}}>SignUp</Button>
          </Box> 
        </>
        )
      }
      <Box>
        <Typography variant="h6" color="secondary">By Continuing you agree to our Terms and Conditions</Typography>
      </Box>
    </Box>
  )
}

export default Auth