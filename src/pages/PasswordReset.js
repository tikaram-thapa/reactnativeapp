import React, { Component } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";

export default class PasswordReset extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logoText}>Forgot Password</Text>
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
        <Button
          title="Change Password"
          onPress={() => Alert.alert("Change password button pressed.")}
        />
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
    padding: 10,
    marginVertical: 10
  },
  logoText: {
    fontSize: 18,
    marginVertical: 15,
    color: "rgba(255, 255, 255, 0.7)"
  }
});
