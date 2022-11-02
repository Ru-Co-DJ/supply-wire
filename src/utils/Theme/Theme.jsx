import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette:{
        primary:{
            main:"#202060",
            light:"#1FBFB8"
        },
        secondary:{
            main:"#05716C"
        },
        info:{
            main:"#F2F2F2",
            light:"#FF5050"
        }
    },
    typography:{
        h6:{
            fontFamily: "Cairo, sans-serif",
            fontWeight:600
        },
        h5:{
            fontFamily: "Cairo, sans-serif",
            fontWeight:500
        },
        h4:{
            fontFamily: "Cairo, sans-serif",
            fontWeight:500
        },
        h3:{
            fontFamily: "Cairo, sans-serif",
            fontWeight:500
        },
        h2:{
            fontFamily: "Cairo, sans-serif",
            fontWeight:300
        },
        h1:{
            fontFamily: "Cairo, sans-serif",
            fontWeight:200
        },
        subtitle1:{
            fontFamily: "Cairo, sans-serif",
            fontWeight:400
        },
        body1:{
            fontFamily: "Cairo, sans-serif",
            fontWeight:400
        },
        caption:{
            fontFamily: "Cairo, sans-serif",
            fontWeight:600
        }
        

    }
})


const Theme = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
  )
}

export default Theme