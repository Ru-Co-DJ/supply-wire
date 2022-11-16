import React from 'react'
import "./addproduct.css"
import {Box, Typography, Tooltip, TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, Button} from "@mui/material"



const AddProduct = ({setNewProduct, newProduct, account}) => {


    setNewProduct(prev=>({...prev, datePosted: new Date()}))
    setNewProduct(prev=>({...prev, sales: 0}))
    setNewProduct(prev=>({...prev, reviews: []}))
    setNewProduct(prev=>({...prev, rate: 0}))
    setNewProduct(prev=>({...prev, store: account.store}))

  return (
    <Box className="addProductContainer">
        <Box className="addProductForm">
          
            <Box className="form">
                <Box>
                    <Typography variant="h5" color="primary">Product Name</Typography>                    
                    <TextField fullWidth variant="standard" label="Product name" onChange={(e)=>{setNewProduct(prev=>({...prev,name:e.target.value}))}}/>
                    <Typography variant="body1">keep the name under 5 words</Typography>
                </Box>
                <Box>
                    <Typography variant="h5" color="primary">Product Price USD</Typography>                    
                    <TextField fullWidth variant="standard" type="number" label="Product price" onChange={(e)=>{setNewProduct(prev=>({...prev,price:Number(e.target.value)}))}}/>
                    <Typography variant="body1">Price in USD</Typography>

                </Box>
                <Box>
                    <Typography variant="h5" color="primary">Product Category</Typography>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel>Product Category</InputLabel>
                        <Select value={newProduct.category || "Laptop"} onChange={(e)=>{setNewProduct(prev=>({...prev,category:e.target.value}))}}>
                            <MenuItem value={"Laptop"}>Laptop</MenuItem>
                            <MenuItem value={"Router"}>Router</MenuItem>
                            <MenuItem value={"Printer"}>Printer</MenuItem>
                            <MenuItem value={"Keyboard"}>Keyboard</MenuItem>
                            <MenuItem value={"GPU"}>GPU</MenuItem>
                            <MenuItem value={"CPU"}>CPU</MenuItem>
                            <MenuItem value={"Mouse"}>Mouse</MenuItem>
                            <MenuItem value={"Drone"}>Drone</MenuItem>
                            <MenuItem value={"Arduino"}>Arduino</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography variant="body1">Required Field</Typography>

                </Box>
                <Box>
                <Typography variant="h5" color="primary">Product Quantity</Typography>
                    <TextField fullWidth variant="standard" type="number" label="Quantity" onChange={(e)=>{setNewProduct(prev=>({...prev,quantity:Number(e.target.value)}))}} />
                    <Typography variant="body1">Must be grater than 0</Typography>
                </Box>
                <Box>
                <Typography variant="h5" color="primary">Name of brand</Typography>
                    <TextField fullWidth variant="standard" label="Product brand" onChange={(e)=>{setNewProduct(prev=>({...prev,brand:e.target.value}))}}/>
                    <Typography variant="body1">keep the name under 5 words</Typography>
                </Box>
                <Box>
                <Typography variant="h5" color="primary">Serie</Typography>
                    <TextField fullWidth variant="standard" label="Product Serie" onChange={(e)=>{setNewProduct(prev=>({...prev,serie:e.target.value}))}}/>
                    <Typography variant="body1">keep the name under 5 words</Typography>
                </Box>
                <Box>
                    <Typography variant="h5" color="primary">Product Images</Typography>
                    <input type="file" name="fileIm" multiple onChange={(e)=>{setNewProduct(prev=>({...prev,images:e.target.files}))}}/>
                    <Typography variant="body1">Select at least 3 images</Typography>
                </Box>
                <Box>
                    <Typography variant="h5" color="primary">Color</Typography>
                    <input type="color" style={{width:"100%"}} onChange={(e)=>{setNewProduct(prev=>({...prev,color:e.target.value}))}}/>
                    <Typography variant="body1">Required field</Typography>
                </Box>
                <Box>
                    <Typography variant="h5" color="primary">Product description</Typography>
                    <TextField fullWidth variant="standard" multiline rows={5} label="Product description" onChange={(e)=>{setNewProduct(prev=>({...prev,description:e.target.value}))}}/>
                    <Typography variant="body1">At least 30 word</Typography>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default AddProduct