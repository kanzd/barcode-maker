import React,{useState} from "react";
import {Grid,AppBar,Toolbar,Typography,Container,TextField,MuiThemeProvider,Button} from "@material-ui/core";
import {} from "@material-ui/icons";
import { createMuiTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import {HashLoader} from "react-spinners";
  import 'react-toastify/dist/ReactToastify.css';
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
    const history = useHistory();
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [loader,setLoader]=useState(false);
    if (window.localStorage.getItem("user")!=null){
        history.push("/home")
    }
    
  
    return (
        <>

        <MuiThemeProvider theme={theme}>
        <ToastContainer />
        <AppBar position="sticky">
            <Toolbar>
            <Container align="center">
                <Typography style={{fontSize:"20px",fontWeight:"bolder"}}> BarCode Maker </Typography>
                
            </Container>
            </Toolbar>
        </AppBar>
        <Container align="center" style={{"marginTop":"5%"}}>
            <Typography variant="h3" style={{fontWeight:"bolder",color:"#1bcf1b"}}>
            Login
            </Typography>
            
        </Container>
        <Grid container justifyContent="center" style={{marginTop:"5%"}} spacing={2}>
        <Grid item xs={2}>
            <TextField label="Username" fullWidth variant="outlined" onChange={(e)=>{
                setUsername(e.target.value);
            }}></TextField>
        </Grid>
        <Grid item xs={2}>
            <TextField label="password" fullWidth variant="outlined" type="password" onChange={(e)=>{
                setPassword(e.target.value);
            }}></TextField>
        </Grid>
        </Grid>
        <Grid container justifyContent="center" style={{marginTop:"1%"}}>
        <Button variant="contained" color="primary" onClick={async (e)=>{
            setLoader(true);
           var response=await axios.post("https://kanishk121.pythonanywhere.com/apis/login/",{username:username,password:password});
           setLoader(false);
           var data = response.data;
           console.log(response.data);
           if (data["response_code"]=="1")
           {

            window.localStorage.setItem("user",data["username"]);
            history.push("/home");
           }
        else{
            toast.error('Wrong Credential', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
});
           
        }
            
        }}>Login</Button>
        </Grid>
        <Container align ="center" style={{marginTop:"3%"}}>
        <HashLoader loading={loader} color={"#1bcf1b"}  size={50}></HashLoader>
        </Container>
       
</MuiThemeProvider>
        </>
    );
}