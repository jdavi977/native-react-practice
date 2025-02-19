import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import Swiper from "react-native-deck-swiper";

const SwipeDeck= () => {
    const pets = [
        {name: "coco", breed: "hamster"},
        {name: "mila", breed: "bunny"},
        {name: "nori", breed: "bunny"}
    ];

    const [likedPets, setLikedPets] = useState([]);
    const [dislikedPets, setDislikedPets] = useState([]);

    const handleLikedPets = (index) => {
        setLikedPets((previous) => [...previous, pets[index]])     
    };

    const handleDislikedPets = (index) => {
        setDislikedPets((previous) => [...previous, pets[index]])
    };

    useEffect(() => {
        console.log("Liked pets: ", likedPets);
      }, [likedPets]);     

    useEffect(() => {
        console.log("Disliked pets: ", dislikedPets);
    }, [dislikedPets]);

    return (
        <View style={styles.container}>
            <Swiper
                cards={pets}
                renderCard = {(pet) => (
                    <View style={styles.card}>
                        <Text>{pet.name}</Text>
                        <Text>{pet.breed}</Text>
                    </View>
                )}
                onSwipedRight={handleLikedPets}
                onSwipedLeft={handleDislikedPets}
                stackSize={3}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        width: 300,  // Set a fixed width
        height: 400, // Set a fixed height
        backgroundColor: "white",
        borderRadius: 10,
        justifyContent: "center", // Center vertically
        alignItems: "center", // Center horizontally
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    }
});

export default SwipeDeck;