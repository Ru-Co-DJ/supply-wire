import React from 'react'
import "./addproduct.css"
import {Box, Typography, Tooltip, TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, Button} from "@mui/material"



const AddProduct = () => {
  return (
    <Box className="addProductContainer">
        <Box className="addProductForm">
            <Box className="head">
                <Typography variant="h5" color="primary">New Product</Typography>
            </Box>
            <Box className="form">
                <Box>
                    <Typography variant="h5" color="primary">Product Name</Typography>                    
                    <TextField fullWidth variant="standard" label="Product name"/>
                    <Typography variant="body1">keep the name under 5 words</Typography>
                </Box>
                <Box>
                    <Typography variant="h5" color="primary">Product Price USD</Typography>                    
                    <TextField fullWidth variant="standard" type="number" label="Product price"/>
                    <Typography variant="body1">Price in USD</Typography>

                </Box>
                <Box>
                    <Typography variant="h5" color="primary">Product Category</Typography>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel>Product Category</InputLabel>
                        <Select value={"choice"} >
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
                    <TextField fullWidth variant="standard" type="number" label="Quantity"/>
                    <Typography variant="body1">Must be grater than 0</Typography>
                </Box>
                <Box>
                <Typography variant="h5" color="primary">Name of brand</Typography>
                    <TextField fullWidth variant="standard" label="Product brand"/>
                    <Typography variant="body1">keep the name under 5 words</Typography>
                </Box>
                <Box>
                    <Typography variant="h5" color="primary">Product Images</Typography>
                    <Typography variant="h6">For images</Typography>
                    <Typography variant="body1">Select at least 3 images</Typography>
                </Box>
                <Box>
                    <Typography variant="h5" color="primary">Available colors</Typography>
                    <Typography variant="h6">For colors</Typography>
                    <Typography variant="body1">Select at least one color</Typography>
                </Box>
                <Box>
                    <Typography variant="h5" color="primary">Product description</Typography>
                    <TextField fullWidth variant="standard" multiline rows={5} label="Product description"/>
                    <Typography variant="body1">At least 30 word</Typography>
                </Box>
            </Box>
            <Box className="column" style={{marginBottom:"50px"}}>
                <FormControlLabel control={<Checkbox  color="secondary"/>} label="I am the owner of this product and this information are CORRECT" />
                <Button variant="contained" color="primary" style={{width:"200px"}}>Submit</Button>
            </Box>
        </Box>
    </Box>
  )
}

export default AddProduct