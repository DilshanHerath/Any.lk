import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from '../component/LocationScreen';
import LoginNew from '../component/LoginNew';
import Loading from '../component/LoadingScreen';
import SignUp from '../component/SignUp';
import Home from '../component/FooterScreen';
import MainContainer from '../component/MainContainer';
import Profile from '../component/ProfileScreen';
import Categories from '../component/CategoriesScreen';
import Location2 from '../component/Location2';


export default class Routers extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="login" component={Login} hideNavBar={true} />
          <Scene key="loading" component={Loading} hideNavBar={true} />
          <Scene key="loginnew" component={LoginNew} hideNavBar={true} />
          <Scene key="signup" component={SignUp} hideNavBar={true} />
          <Scene key="home" component={Home} hideNavBar={true} />
          <Scene key="profile" component={Profile} hideNavBar={true} />
          <Scene key="categories" component={Categories} hideNavBar={true} />
          <Scene key="location2" component={Location2} hideNavBar={true} />
          <Scene
            key="main"
            component={MainContainer}
            hideNavBar={true}
            initial
          />
        </Scene>
      </Router>
    );
  }
}
