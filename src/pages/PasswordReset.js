import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Field, reduxForm } from "redux-form";

import { Actions } from "react-native-router-flux";

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
    padding: 10
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

class PasswordReset extends Component {
  goLogin() {
    Actions.pop(); // login()
  }

  renderInput({
    placeholder,
    secureTextEntry,
    input,
    meta: { touched, error }
  }) {
    var hasError = false;
    if (error !== undefined) {
      hasError = true;
    }
    return (
      <View error={hasError}>
        <TextInput
          style={styles.textinput}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          {...input}
        />
        {hasError ? <Text>{error}</Text> : <Text />}
      </View>
    );
  }

  onSubmit = values => {
    alert("on submmit" + values.username);
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Forgot Password</Text>
        <Field
          name="username"
          placeholder="Username"
          component={this.renderInput}
        />
        <Field
          name="oldPassword"
          placeholder="Old Password"
          secureTextEntry={true}
          component={this.renderInput}
        />
        <Field
          name="newPassword"
          placeholder="New Password"
          secureTextEntry={true}
          component={this.renderInput}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(this.onSubmit)}
        >
          <Text style={styles.buttonText}>Change Password</Text>
        </TouchableOpacity>
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

const validate = values => {
  const error = {};
  if (!values.username) {
    error.username = "Username is required.";
  }
  if (!values.oldPassword) {
    error.oldPassword = "Old password is required.";
  }
  if (!values.newPassword) {
    error.newPassword = "New password is required.";
  }
  return error;
};

export default reduxForm({
  form: "changePassword",
  validate
})(PasswordReset);
