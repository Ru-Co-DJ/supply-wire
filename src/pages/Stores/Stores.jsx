import React from 'react'
import { Typography, Box, Card, CardHeader, CardMedia, CardContent, CardActions, Backdrop, CircularProgress, Avatar, Button,  } from '@mui/material'
import { useQuery } from '@apollo/client'
import { getStores } from '../../api'
import "./stores.css"
import { Link } from 'react-router-dom'
const Stores = () => {
    const {loading, error, data} = useQuery(getStores);
    console.log(data)
    
    
    
    return (
    <Box>
        {
            loading ? (
                <Backdrop sx={{color:"#fff", zIndex:"10"}} open={loading}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
            ):(
                <Box className="storesContainer">
                    {
                        data.stores?.map((e,i)=>{
                            return (
                                <Box className="singleStore">
                                    <Card style={{width:"280px",maxHeight:"350px", backgroundColor:"#0E2A47", padding:"5px"}} elevation={10}>
                                        <CardHeader
                                            style={{color:"#f2f2f2"}}
                                            avatar={<Avatar style={{backgroundColor:"#1FBFB8"}}>{e.name.toUpperCase()[0]}</Avatar>}
                                            title={e.name}
                                            subheader={<Typography variant="body1" color="info.main">&#x2605;{e.rate}</Typography>}
                                        />
                                        <CardMedia
                                        component="img"
                                        height="150"
                                        image={e.image}
                                        alt={e.name}
                                        />
                                        <CardContent style={{maxHeight:"50px", overflow:"scroll"}}>
                                            <Typography variant="body1" color="info.main">{e.description}</Typography>
                                        </CardContent>

                                        <CardActions disableSpacing style={{marginBottom:"5px"}}>
                                            <Button variant="contained" color="secondary">
                                                <Link to={`/store/${e.id}`} className="link" style={{color:"#f2f2f2"}}>
                                                    visit Store
                                                </Link>
                                            </Button>
                                        </CardActions>
                                     
                                    </Card>
                                </Box>
                            )
                        })
                    }
                </Box>
            )
        }
    </Box>
  )
}

export default Stores