import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
} from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const messageStatus = "MSNP React App";

export default class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  usernameChangedHandler = value => {
    this.setState({
      username: value
    });
  };

  passwordChangeHandler = value => {
    this.setState({
      password: value
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text> */}
        {/* <Text style={styles.instructions}>To get started, edit App.js</Text> */}
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
        <Text style={styles.welcome}>{messageStatus}</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Username"
          type
          value={this.state.username}
          onChangeText={this.usernameChangedHandler}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={this.passwordChangeHandler}
        />
        <Button
          title="Login"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
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
  textinput: {
    backgroundColor: "#ffffff",
    width: 200,
    padding: 10,
    marginBottom: 10
  }
});
