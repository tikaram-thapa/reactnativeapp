import React, { Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import { logoutUser } from "../actions/auth.action";
import Loader from "../components/Loader";

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

class Profile extends Component {
    state = {
        logoutClicked: false
    }

    logoutUser = (username) => {
        this.setState({
            logoutClicked: true
        })
        this.props.dispatch(logoutUser(username));
    }

    // logoutUser = async (username) => {
    //     this.setState({
    //         logoutClicked: true
    //     })
    //     try {
    //         const response = await this.props.dispatch(logoutUser(username));
    //         if (!response.success) {
    //             // let errorText = response.responseBody;
    //             // Alert.alert(
    //             //     'Logout Error!',
    //             //     errorText,
    //             //     [
    //             //         {
    //             //             text: 'Cancel',
    //             //             style: 'cancel',
    //             //         },
    //             //     ]
    //             // );
    //         }
    //     } catch (error) {
    //         let errorText;
    //         if (error.message) {
    //             errorText = error.message
    //         }
    //         errorText = error.responseBody;
    //         Alert.alert(
    //             'Logout Error!',
    //             errorText,
    //             [
    //                 {
    //                     text: 'Cancel',
    //                     style: 'cancel',
    //                 },
    //             ]
    //         );
    //     }
    // }

    render() {
        const { getUser: { userDetails } } = this.props;
        const user = userDetails ? userDetails.user : null
        return (
            <View style={styles.container}>
                {this.state.logoutClicked && <Loader />}
                <Text style={styles.textStyle}>Welcome, {user}</Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.logoutUser(user)}
                >
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

mapStateToProps = state => ({
    getUser: state.userReducer.getUser
});

mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);