import React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SingleHorizontalContainer = (props) => {
    return (
        <View style={[styles.container, { backgroundColor: props.blue === true ? "#396DC4" : "#E6EDF8" }]}>
            <Text style={[styles.textContainer, { color: props.blue === true ? "white" : "#396DC4" }]}>{props.number} series</Text>
        </View>
    );
}

const SingleBottomProduct = ({ image, name }) => {
    const navigation = useNavigation();
    return (
        <TouchableNativeFeedback onPress={() => {
            navigation.navigate("Details", { image: image, name: name })
        }}>
            <View style={styles.bottomImage}>
                <Image style={styles.bottomImageStyle} source={image} />
                <Text style={[styles.availablenow, { fontSize: 16, marginBottom: 10, }]}>{name}</Text>
            </View>
        </TouchableNativeFeedback>
    );
}


const HomeScreen = () => {
    return (
        <View >
            <View style={styles.row}>
                <View>
                    <Text style={styles.topText}>BMW</Text>
                    <Text style={styles.topText}>Test Drive</Text>
                </View>
                <Image style={styles.image} source={{ uri: "https://efmireland.ie/wp-content/uploads/2016/07/man-838636_960_720.jpg" }} />
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: 10 }}>
                <SingleHorizontalContainer blue={true} number={"1"} />
                <SingleHorizontalContainer blue={false} number={"2"} />
                <SingleHorizontalContainer blue={true} number={"3"} />
                <SingleHorizontalContainer blue={false} number={"4"} />
                <SingleHorizontalContainer blue={false} number={"5"} />
            </ScrollView>
            <Text style={styles.availablenow}>Available now</Text>
            <View style={styles.imageContainer}>
                <Image style={styles.mainContainerImage} source={require("../assets/1.png")} />
                <Text style={styles.blueTextImage}>120d xDrive</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <SingleBottomProduct image={require("../assets/2.png")} name="X7 M50d" />
                <SingleBottomProduct image={require("../assets/4.png")} name="530i" />
                <SingleBottomProduct image={require("../assets/3.png")} name="X7 M50d" />

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 30,
        width: 72,
        borderRadius: 25,
        marginRight: 12,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: "#396DC4"
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        alignItems: 'center',
    },
    topText: {
        fontSize: 28,
        fontWeight: "bold",
    },
    textContainer: {
        color: "white"
    },
    image: {
        height: 40,
        width: 40,
        borderRadius: 20,
        top: 15,
    },
    availablenow: {
        fontWeight: 'bold',
        fontSize: 18.0,
        color: "#808187",
        marginTop: 25,
        marginLeft: 12.0,
    },
    imageContainer: {
        height: "35%",
        width: "93%",
        margin: 12.0,
        paddingVertical: 12.0,
        justifyContent: "space-between",
        marginRight: 12.0,
        overflow: 'hidden',
        borderRadius: 14,
        backgroundColor: "#5192FC",
    },
    mainContainerImage: {
        marginTop: 16.0, height: 170, width: 400, marginLeft: 80,
    },
    blueTextImage: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
        marginLeft: 12.0,
    },
    bottomImage: {
        height: 200,
        width: "20%",
        margin: 12.0,
        justifyContent: "space-between",
        marginRight: 12.0,
        overflow: "hidden",
        borderRadius: 14,
        backgroundColor: "#C6C8D1",
    },
    bottomImageStyle: { marginTop: 40.0, height: 100, width: 220, marginLeft: 16 }

});
export default HomeScreen;