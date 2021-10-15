import React, {useState} from 'react'
import {Grid, Container, Paper, Typography, TextField, Button} from '@mui/material'
import {makeStyles} from '@mui/styles'
import { typography } from '@mui/system'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

const useStyles=makeStyles(theme=>({  //Hook
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

const CreateTask = () => {
    const [body,setBody]=useState({name:'',description:'',duedate:'',assignedto:'',state:''})
    const classes = useStyles()
  
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
          <Route path="/createtask">
            <Grid container component='main' className={classes.root}>
              <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
                <div className={classes.div}>
                  <Typography component='h1' variant='title'>
                    Create Task
                  </Typography>
                  <form className={classes.form}>
                    <TextField fullWidth autoFocus color='primary' margin='normal' variant='outlined' label='name' name='name' value={body.name} onChange={handleChange}/>
                    <TextField fullWidth autoFocus color='primary' margin='normal' variant='outlined' label='description' name='description' value={body.description} onChange={handleChange}/>
                    <TextField fullWidth autoFocus color='primary' margin='normal' variant='outlined' label='duedate' name='duedate' value={body.duedate} onChange={handleChange}/>
                    <TextField fullWidth autoFocus color='primary' margin='normal' variant='outlined' label='assignedto' name='assignedto' value={body.assignedto} onChange={handleChange}/>
                    <TextField fullWidth autoFocus color='primary' margin='normal' variant='outlined' label='state' name='state' value={body.state} onChange={handleChange}/>


                    <Button fullWith variant='contained' color='primary' className={classes.button} to="./components/Signin">
                      Create Task
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

export default CreateTask