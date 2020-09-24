import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./Home";
import Header from '../components/header/Header';
import Calculator from '../components/calculator/Calculator';
import Timer from '../components/timer/Timer';

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/calculator' component={Calculator}/>
            <Route path='/timer' component={Timer}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
