import React, { Component } from "react";
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Alert
} from "react-native";
import { connect } from "react-redux";

import { logoutUser } from "../actions/auth.action";
import { getMunicipalityData } from "../actions/municipality.action";
import Loader from "../components/Loader";
import Toast from "../components/Toast";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#0277bc",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 10
    },
    greetingText: {
        flex: 1,
        flexDirection: "row",
        color: "#ffffff",
        fontSize: 25
    },
    detailStyle: {
        justifyContent: "flex-start",
        alignItems: "stretch",
        marginTop: 10
    },
    font1: {
        color: "#ffffff",
        fontSize: 25,
        fontWeight: "400"
    },
    font2: {
        color: "#ffffff",
        fontSize: 20
    },
    font3: {
        color: "#ffffff",
        fontSize: 15
    },
    headerBox: {
        backgroundColor: "#1f548a",
        color: "#ffffff",
        width: 250,
        padding: 10,
        marginBottom: 10
    },
    budgetBox: {
        backgroundColor: "#a4b357",
        color: "#ffffff",
        fontSize: 20,
        width: 250,
        padding: 10,
        marginBottom: 10
    },
    planBox: {
        backgroundColor: "#24ad9b",
        color: "#ffffff",
        fontSize: 20,
        width: 250,
        padding: 10,
        marginBottom: 10
    },
    progressBox: {
        backgroundColor: "#4ea800",
        color: "#ffffff",
        fontSize: 20,
        width: 250,
        padding: 10,
        marginBottom: 10
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
    constructor(props) {
        super(props);
        this.state = {
            logoutClicked: false,
            dataLoad: false,
            municipalityData: {
                name: null,
                address: null,
                appName: "Multi-Sectorial Nutrition Plan (MSNP)",
                budgetCommitment: null,
                budgetPlanning: null,
                budgetProgress: null,
                totalActivity: null,
                totalProgress: null
            }
        }
    }

    logoutUser = (username) => {
        this.setState({
            logoutClicked: true
        })
        this.props.dispatch(logoutUser(username));
    }

    componentDidMount() {
        const { getUser: { userDetails } } = this.props;
        const user = userDetails ? userDetails.user : null
        this.getMunicipalityData(user);
    }

    dataLoad = () => {
        this.setState({
            dataLoad: false,
        });
    };

    getMunicipalityData = async (username) => {
        try {
            const response = await this.props.dispatch(getMunicipalityData(username));
            if (response.success) {
                const data = response.responseBody.data;
                const municipalityData = data.municipalityData;
                const budgetData = data.budgetData;
                const activityData = data.activityData;
                this.setState(
                    {
                        dataLoad: true,
                        municipalityData: {
                            name: municipalityData.locallevelName,
                            address: municipalityData.districtName + ", " + municipalityData.provinceName,
                            appName: "Multi-Sectorial Nutrition Plan (MSNP)",
                            budgetCommitment: budgetData.budgetCommitment,
                            budgetPlanning: budgetData.budgetPlaning,
                            budgetProgress: budgetData.budgetProgress,
                            totalActivity: activityData.totalActivity,
                            totalProgress: activityData.activityProgress
                        }
                    },
                    () => {
                        this.dataLoad();
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

    render() {
        const { getUser: { userDetails }, municipalityData } = this.props;
        const user = userDetails ? userDetails.user : null
        return (
            <ScrollView>
                <View style={styles.container}>
                    {this.state.logoutClicked && <Loader />}
                    {(municipalityData && municipalityData.isLoading) && <Loader />}
                    {(this.state.dataLoad) && <Toast message={"Data loaded successfully."} />}
                    <Text style={styles.greetingText}>Welcome, {user}</Text>
                    <View style={styles.detailStyle}>
                        <Text style={styles.font1}>{this.state.municipalityData.name}</Text>
                        <Text style={styles.font2}>{this.state.municipalityData.address}</Text>
                        <Text style={styles.font3}>{this.state.municipalityData.appName}</Text>
                    </View>
                    <View style={styles.detailStyle}>
                        <View style={styles.headerBox}>
                            <Text style={styles.font2}>Budget Planned and Expenditure Progress</Text>
                        </View>
                        <View style={styles.budgetBox}>
                            <Text style={styles.font2}>{this.state.municipalityData.budgetCommitment}</Text>
                            <Text style={styles.font2}>Budget Commitment</Text>
                        </View>
                        <View style={styles.planBox}>
                            <Text style={styles.font2}>{this.state.municipalityData.budgetPlanning}</Text>
                            <Text style={styles.font2}>Budget Planning</Text>
                        </View>
                        <View style={styles.progressBox}>
                            <Text style={styles.font2}>{this.state.municipalityData.budgetProgress}</Text>
                            <Text style={styles.font2}>Budget Progress</Text>
                        </View>
                        <View style={styles.headerBox}>
                            <Text style={styles.font2}>Physical Progress</Text>
                        </View>
                        <View style={styles.budgetBox}>
                            <Text style={styles.font2}>{this.state.municipalityData.totalActivity}</Text>
                            <Text style={styles.font2}>Total Activities</Text>
                        </View>
                        <View style={styles.progressBox}>
                            <Text style={styles.font2}>{this.state.municipalityData.totalProgress}</Text>
                            <Text style={styles.font2}>Activity Progress</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.logoutUser(user)}
                    >
                        <Text style={styles.buttonText}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}

mapStateToProps = state => ({
    getUser: state.userReducer.getUser,
    municipalityData: state.municipalityReducer.getMunicipalityData
});

mapDispatchToProps = dispatch => ({
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile);