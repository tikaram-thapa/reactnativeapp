import React, { Component } from "react";
import { Text, View } from "react-native";
import { Router, Stack, Scene } from "react-native-router-flux";

import Login from "../pages/Login";
import PasswordReset from "../pages/PasswordReset";

export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key="root" hideNavBar={true}>
          <Scene key="login" component={Login} title="Login" initial={true} />
          <Scene
            key="passwordReset"
            component={PasswordReset}
            title="Forgot Password"
          />
        </Stack>
      </Router>
    );
  }
}
