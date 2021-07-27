import React,{useState} from "react";

import Barcode from "react-barcode";
import {Grid,AppBar,Toolbar,Typography,Container,TextField,MuiThemeProvider,Button} from "@material-ui/core";
import {} from "@material-ui/icons";
import { createMuiTheme } from "@material-ui/core/styles";
import html2canvas from 'html2canvas';
// import { useScreenshot } from 'use-react-screenshot'
const theme = createMuiTheme({
    palette: {
      primary: {
        light: "#1bcf1b",
        main: "#1bcf1b",
        dark: "#1bcf1b",
        contrastText: "#fff",
      },
      secondary: {
        light: "#2196f3",
        main: "#2196f3",
        dark: "#ba000d",
        contrastText: "#000",
      },
    },
  });
export default function Index(props){
    const [state,setState]=useState("Example");
    const [res,setResponse]=useState(10);
    // const [image, takeScreenshot] = useScreenshot();
    // const ref = createRef(null);
  // const getImage = () => takeScreenshot(ref.current)
    return (
        <>
        <MuiThemeProvider theme={theme}>
        <AppBar position="sticky">
            <Toolbar>
            <Container align="center">
                <Typography style={{fontSize:"20px",fontWeight:"bolder"}}> BarCode Maker </Typography>
            </Container>
            </Toolbar>
        </AppBar>
        <Grid container justifyContent="center" style={{marginTop:"5%"}}>
        <Grid item xs={8}>
        
            <TextField label="Your Input" variant="outlined"  fullWidth onChange={(e)=>{
                setState(e.target.value);
            }}></TextField>
           
        </Grid>
        </Grid>
        <Container align="center" style={{marginTop:"2%"}}>
        <div id={"barcode"} style={{backgroundColor:"transparent"}}>
        <Barcode displayValue={false} width={0.3} height={50} value={state} ></Barcode>
        </div>
        <a href={""} id={"a"} download ={"barcode.png"}></a>
        <div>
        <Button variant="contained" color="primary" onClick={async (e)=>{
          // getImage();
          var can = await html2canvas(document.getElementById("barcode"));
          console.log(can.toDataURL());
          document.getElementById('a').href=can.toDataURL();
          document.getElementById('a').click();

        }}>Download Barcode</Button>
        </div>
        
        </Container>
        </MuiThemeProvider>
        </>
    )
}