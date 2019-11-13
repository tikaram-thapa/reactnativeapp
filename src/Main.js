import React, { Component } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import Routes from "./components/Routes";

class Main extends Component {
  render() {
    const { authData: { isLoggedIn } } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#004c8b" barStyle="light-content" />
        <Routes isLoggedIn={isLoggedIn} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

mapStateToProps = state => ({
  authData: state.authReducer.authData
})

export default connect(
  mapStateToProps,
  null
)(Main);
