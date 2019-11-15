import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View
} from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0277bc',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: '#ffffff',
        fontSize: 18
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
    }
})

export default class Logout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.buttonText} >Logout</Text>
            </View>
        );
    }
}