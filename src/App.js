import React, {useState} from 'react'
import {Grid, Container, Paper, Typography, TextField, Button} from '@mui/material'
import {makeStyles} from '@mui/styles'
import { typography } from '@mui/system'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Signin from './components/Signin';
import CreateTask from './components/CreateTask';
import Home from './components/Home';


//rafce
const App = () => {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/createtask">
            <CreateTask />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>


  )
}

export default App

