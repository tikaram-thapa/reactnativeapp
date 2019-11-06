/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";

import LoginPage from "./components/LoginPage";
import Home from "./components/Home";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="login" component={LoginPage} />
          <Scene key="home" component={Home} />
        </Stack>
      </Router>
    );
  }
}
