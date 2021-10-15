import React, {useState} from 'react'
import {Grid, Container, Paper, Typography, TextField, Button} from '@mui/material'
import {makeStyles} from '@mui/styles'
import { typography } from '@mui/system'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
//import {makeStyless} from '@material-ui/core/styles'
//import fondo from './assets/images/fondo.png'
const use1Styles=makeStyles(theme=>({  //Hook
    root:{
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh'
    },
  
    container:{
      height:'100%'
      //marginTop: theme.spacing(5)
    },
  
    div:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    },
  
    form:{
      width:'100%'
      
    },
  
    button:{
  
    }
  }))

const Signin = () => {
    const [body,setBody]=useState({username:'',password:''})
    const classes = use1Styles()
  
    const handleChange= (event) =>{
      //console.log(event.target.value)
      setBody({
        ...body, //mantiene el valor anterio
        [event.target.name]: event.target.value
      })
    }
  
  
    return (
      <Router>
        <Switch>
          <Route path="/signin">
            <Grid container component='main' className={classes.root}>
              <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
                <div className={classes.div}>
                  <Typography component='h1' variant='title'>
                    Sign In
                  </Typography>
                  <form className={classes.form}>
                    <TextField fullWidth autoFocus color='primary' margin='normal' variant='outlined' label='username' name='username' value={body.username} onChange={handleChange}/>
                    <TextField fullWidth type='password' color='primary' margin='normal' variant='outlined' label='password' name='password' value={body.password} onChange={handleChange}/>

                    <Button fullWith variant='contained' color='primary' className={classes.button} to="./components/Signin">
                      Sign In
                    </Button>
                  </form>
                </div>
              </Container>
            </Grid>
          </Route>
        </Switch>
      </Router>
    )
}

export default Signin
