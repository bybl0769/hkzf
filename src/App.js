import React, { Component, Fragment } from 'react'
import Home from './pages/Home';
import Info from './pages/Info';
import List from './pages/List';
import Profile from './pages/Profile';
import HKLaout from './components/HKLaout';
import { HashRouter as Router, Route } from "react-router-dom"



export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Route path="/" exact render={(props) => <HKLaout> <Home {...props}></Home> </HKLaout>}></Route>
          <Route path="/info" exact render={(props) => <HKLaout> <Info {...props}></Info> </HKLaout>}></Route>
          <Route path="/list" exact render={(props) => <HKLaout><List {...props}></List> </HKLaout>}></Route>
          <Route path="/profile" exact render={(props) => <HKLaout> <Profile {...props}></Profile> </HKLaout>}></Route>
        </Router>
      </Fragment>



    )
  }
}
