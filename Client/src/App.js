import React from "react";
import { Container} from "@material-ui/core";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import NavBar from "./Components/NavBar/NavBar";
import Home from "../src/Components/Home/Home";
import Auth from "./Components/Auth/Auth";
import './App.css';


const App = () => {
  

  return (
    <BrowserRouter>
    <Container maxWidth="lg">
      <NavBar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/auth" exact component={Auth}/>
      </Switch>
    </Container>
    </BrowserRouter>
  );
};

export default App;
