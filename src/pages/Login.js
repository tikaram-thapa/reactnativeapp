import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";

import Logo from "../components/Logo";
import Form from "../components/Form";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class Login extends Component {
  passwordReset() {
    Actions.passwordReset();
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text> */}
        {/* <Text style={styles.instructions}>To get started, edit App.js</Text> */}
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
        <Logo />
        <Form type="Login" />
        <View style={styles.forgotPasswordCont}>
          <Text style={styles.textColor}>Forgot password?</Text>
          <TouchableOpacity onPress={this.passwordReset}>
            <Text style={styles.clickHere}>Click Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0277bc"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  forgotPasswordCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row"
  },
  textColor: {
    color: "rgba(255, 255, 255, 0.7)",
    fontSize: 16
  },
  clickHere: {
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: 16
  }
});
