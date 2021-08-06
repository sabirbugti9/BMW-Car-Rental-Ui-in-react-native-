import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const SingleContainer = ({ image, name, topName }) => {
    return (
        <View style={styles.typeContainer}>
            <Text style={styles.typeContainerTop}>{topName}</Text>
            <Image style={styles.image} source={image} />
            <Text style={[styles.typeContainerTop, { color: "#646870", fontWeight: "normal" }]}>{name}</Text>
        </View>
    );
}

const DetailsScreen = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <View style={styles.topIcon}>
                    <Ionicons size={30} color="white" name="chevron-back-outline" onPress={() => {
                        props.navigation.goBack();
                    }} />
                    <Image style={styles.image} source={require("../assets/bmwlogo.png")} />
                </View>
                <Image style={styles.bmwCar} source={props.route.params.image} />

            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.name}>BMW {props.route.params.name}</Text>
                <View style={{ flexDirection: "row" }}>
                    <SingleContainer image={require("../assets/engine.png")} topName="Engine" name="188 hp" />
                    <SingleContainer image={require("../assets/drivetype.png")} topName="Drive type" name="4WD" />
                    <SingleContainer image={require("../assets/transmission.png")} topName="Transmission" name="Automatic" />
                </View>
                <View style={{ flexDirection: "row" }}>
                    <SingleContainer image={require("../assets/fuel.png")} topName="Fuel" name="Diesel" />
                    <SingleContainer image={require("../assets/speed.png")} topName="Top speed" name="230 km/h" />
                    <SingleContainer image={require("../assets/meter.png")} topName="0-100 km/h" name="7 seconds" />
                </View>
                <Text style={styles.trigger}>Trigger aspiration</Text>
                <Text style={[styles.typeContainerTop, { marginTop: 12 }]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                <TouchableOpacity activeOpacity={0.5} style={{ bottom: 45 }} onPress={() => { }}>
                    <View style={styles.btn}>
                        <Text style={[styles.typeContainerTop,{color:"white"}]}>Book</Text>

                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#5192FC",
    },
    topContainer: {
        backgroundColor: "transparent",
        flex: 1.5,
    },
    topIcon: {
        flexDirection: "row",
        marginHorizontal: 6.0,
        marginTop: 12.0,
        justifyContent: "space-between",
    },
    bottomContainer: {
        backgroundColor: "white",
        flex: 3,
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    bmwCar: {
        height: 160,
        width: 350,
        alignSelf: "center",
    },
    name: {
        fontSize: 20,
        color: "#2C323C",
        fontWeight: "bold",
    },
    typeContainer: {
        height: 115,
        marginTop: 24.0,
        marginRight: 10.0,
        justifyContent: "space-evenly",
        alignItems: "center",
        borderRadius: 20,
        width: 100,
        borderWidth: 3,
        borderColor: "#F3F2F7",
    },
    typeContainerTop: {
        fontSize: 12.0,
        color: "#BCBEBF",
        fontWeight: "bold",
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 20,
    },
    trigger: {
        fontSize: 14,
        marginTop: 24,
        color: "#2C323C",
    },
    btn: { height: 45, width: "100%", borderRadius: 50, justifyContent: "center", alignItems: "center", backgroundColor: "#5295FF" }

});

export default DetailsScreen;