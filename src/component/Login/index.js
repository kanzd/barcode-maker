import React,{useState} from "react";
import {Grid,AppBar,Toolbar,Typography,Container,TextField,MuiThemeProvider,Button} from "@material-ui/core";
import {} from "@material-ui/icons";
import { createMuiTheme } from "@material-ui/core/styles";
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
export default function Login(props){
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
        <Container ></Container>
        <Grid container justifyContent="center" style={{marginTop:"10%"}} spacing={2}>
        <Grid item xs={2}>
            <TextField label="Username" fullWidth variant="outlined"></TextField>
        </Grid>
        <Grid item xs={2}>
            <TextField label="password" fullWidth variant="outlined"></TextField>
        </Grid>
        </Grid>
        <Grid container justifyContent="center" style={{marginTop:"1%"}}>
        <Button variant="contained" color="primary">Login</Button>
        </Grid>
</MuiThemeProvider>
        </>
    );
}