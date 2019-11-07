import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const messageStatus = "MSNP React App";
export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 100, height: 100 }}
          source={require("../images/logo.png")}
        />
        <Text style={styles.logoText}>{messageStatus}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  logoText: {
    fontSize: 18,
    marginVertical: 15,
    color: "rgba(255, 255, 255, 0.7)"
  }
});
