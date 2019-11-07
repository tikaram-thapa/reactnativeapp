import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";
import Routes from "./components/Routes";

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#004c8b" barStyle="light-content" />
        <Routes />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
