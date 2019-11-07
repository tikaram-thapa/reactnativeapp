import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button, Alert } from "react-native";

const messageStatus = "MSNP React App";
export default class Form extends Component {
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
        <TextInput
          style={styles.textinput}
          placeholder="Username"
          onSubmitEditing={() => this.password.focus()}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          secureTextEntry={true}
          ref={input => (this.password = input)}
        />
        <Button
          title={this.props.type}
          onPress={() => Alert.alert("Login action")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textinput: {
    backgroundColor: "#ffffff",
    width: 200,
    padding: 10,
    marginVertical: 10
  }
});
