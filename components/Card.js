import React from "react";
import { Text, View, StyleSheet, Image, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


const {width, height} = Dimensions.get("screen");

const Card = ({name, age, breed, image, isFirst}) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,.9)']}
                style={styles.gradient}
                >
                    <View style={styles.userContainer}>
                        <Text style={styles.nameText}>{name}, {age}</Text>
                        <Text style={styles.breedText}>{breed}</Text>
                    </View>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
        container: {
            position: "absolute",
            top: 25,
        },
        userContainer: {

        },
        image: {
            width: width * 0.9,
            height: height * 0.78,
            borderRadius: 20
        },
        gradient: {
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 300
        },
        nameText: {

        },
        breedText: {

        },
});

export default Card;