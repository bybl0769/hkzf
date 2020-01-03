import React, { Component, Fragment } from 'react'
import Home from './pages/Home';
import Info from './pages/Info';
import List from './pages/List';
import Profile from './pages/Profile';
import { HashRouter as Router, Route } from "react-router-dom"



export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route path="/" exact render={(props) => <Home {...props}></Home>}></Route>
          <Route path="/info" exact render={(props) => <Info {...props}></Info>}></Route>
          <Route path="/list" exact render={(props) => <List {...props}></List>}></Route>
          <Route path="/profile" exact render={(props) => <Profile {...props}></Profile>}></Route>
        </Router>
      </Fragment>



    )
  }
}
