import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Button,
  Alert
} from "react-native";
import { Actions } from "react-native-router-flux";

export default class PasswordReset extends Component {
  goLogin() {
    Actions.pop(); // login()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Forgot Password</Text>
        <TextInput style={styles.textinput} placeholder="Username" />
        <TextInput
          style={styles.textinput}
          placeholder="Old Password"
          secureTextEntry={true}
        />
        <TextInput
          style={styles.textinput}
          placeholder="New Password"
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => Alert.alert("Change password button pressed.")}
        >
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
        {/* <Button
          title="Change Password"
          onPress={() => Alert.alert("Change password button pressed.")}
        /> */}
        <View style={styles.bottomTextContent}>
          <Text style={styles.textColor}>Changed password?</Text>
          <TouchableOpacity onPress={this.goLogin}>
            <Text style={styles.clickHere}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#0277bc"
  },
  textinput: {
    backgroundColor: "#ffffff",
    width: 200,
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "500",
    marginVertical: 15,
    color: "rgba(255, 255, 255, 0.7)"
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
  },
  bottomTextContent: {
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
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500"
  }
});
