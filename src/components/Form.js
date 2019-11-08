import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text
} from "react-native";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null
    };
  }

  onInputChaneHandler = (type, value) => {
    this.setState({
      [type]: value
    });
  };

  onSubmit = () => {
    alert(this.state.username + ", " + this.state.password);
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textinput}
          placeholder="Username"
          onSubmitEditing={() => this.password.focus()}
          onChangeText={value => this.onInputChaneHandler("username", value)}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          secureTextEntry={true}
          ref={input => (this.password = input)}
          onChangeText={value => this.onInputChaneHandler("password", value)}
        />
        <TouchableOpacity style={styles.button} onPress={this.onSubmit}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
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
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  button: {
    width: 200,
    backgroundColor: "#004c8b",
    borderRadius: 5,
    marginVertical: 10,
    paddingVertical: 12
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});
