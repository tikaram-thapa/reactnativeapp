import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  TouchableOpacity,
  ToastAndroid
} from "react-native";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { compose } from "redux";

import { Actions } from "react-native-router-flux";

import Logo from "../components/Logo";
import Form from "../components/Form";
import { loginUser } from "../actions/auth.action";
import Loader from "../components/Loader";
import Toast from "../components/Toast";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

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
  textinput: {
    backgroundColor: "#ffffff",
    width: 200,
    borderRadius: 5,
    padding: 10
  },
  errorText: {
    color: "#c62828",
    fontSize: 14
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
  forgotPasswordContent: {
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
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toastVisible: false
    }
  }

  passwordReset() {
    Actions.passwordReset();
  }

  hideToast = () => {
    this.setState({
      toastVisible: false,
    });
  };

  // loginUser = (values) => {
  //   this.props.dispatch(loginUser(values));
  // }
  loginUser = async (values) => {
    try {
      const response = await this.props.dispatch(loginUser(values));
      // console.log(response);
      if (!response.success) {
        this.setState(
          {
            toastVisible: true,
          },
          () => {
            this.hideToast();
          },
        );
      }
    } catch (error) {
      let errorText;
      if (error.message) {
        errorText = error.message
      }
      errorText = error.responseBody;
      Alert.alert(
        'Login Error!',
        errorText,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ]
      );
    }
  }

  onSubmit = values => {
    this.loginUser(values);
  };

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
        {touched ? <Text style={styles.errorText}>{error}</Text> : <Text />}
      </View>
    );
  }

  render() {
    const { handleSubmit, loginUser } = this.props;
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text> */}
        {/* <Text style={styles.instructions}>To get started, edit App.js</Text> */}
        {/* <Text style={styles.instructions}>{instructions}</Text> */}
        {(loginUser && loginUser.isLoading) && <Loader />}
        <Logo />
        {(this.state.toastVisible) && <Toast message={"Username/password not matched."} />}
        {/* <Form type="Login" /> */}
        <Field
          name="username"
          placeholder="Username"
          component={this.renderInput}
        />
        <Field
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          component={this.renderInput}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(this.onSubmit)}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.forgotPasswordContent}>
          <Text style={styles.textColor}>Forgot password?</Text>
          <TouchableOpacity onPress={this.passwordReset}>
            <Text style={styles.clickHere}> Click Here</Text>
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
  if (!values.password) {
    error.password = "Password is required.";
  }
  return error;
};

mapStateToProps = state => ({
  loginUser: state.authReducer.loginUser
});

mapDispatchToProps = dispatch => ({
  dispatch
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  reduxForm({
    form: "login",
    validate
  })
)(Login);

// export default connect(null,null)(reduxForm({
//     form: "login",
//     validate
//   })(Login)
// );

// export default reduxForm({
//   form: "login",
//   validate
// })(Login);
