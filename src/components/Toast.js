import React, { Component } from "react";
import {
    StyleSheet,
    View,
    ToastAndroid
} from "react-native";

const ToastVisible = (props) => {
    ToastAndroid.showWithGravityAndOffset(
        props.message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50,
    );
    return null;
};

export default class Toast extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ToastVisible message={this.props.message} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});