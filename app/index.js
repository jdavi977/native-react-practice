import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Swiper from "react-native-deck-swiper"; // ✅ Import Swiper
import { petData as petDataArray } from "../utils/data.js";
import Card from "../components/Card.js";

export default function Index() {
  const [petData, setPetData] = useState(petDataArray);

  const [likedPet, setLikedPet] = useState([]);
  const [dislikedPet, setDislikedPet] = useState([]);

  const handleLiked = (index) => {
        setLikedPet((prev) => ([...prev, petData[index]]));
    };

  const handleDisliked = (index) => {
        setDislikedPet((prev) => ([...prev, petData[index]]));
    };
  
  useEffect(() => {
    console.log("Pet liked: ", likedPet)
  }, [likedPet])

  useEffect(() => {
    console.log("Pet disliked: ", dislikedPet)
  }, [dislikedPet])

  useEffect(() => {
    if (!petData.length) {
      setPetData(petDataArray); // ✅ Fixing setState issue
    }
  }, [petData.length]);

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white", justifyContent: "center" }}>
      <Swiper
        cards={petData} // Pass petData array
        renderCard={(card) => (
          <Card
            key={card.name}
            name={card.name}
            age={card.age}
            breed={card.breed}
            image={card.image}
          />
        )}
        onSwipedRight={handleLiked}
        onSwipedLeft={handleDisliked}
        infinite // Keeps looping the cards
        backgroundColor="transparent"
        stackSize={3} // Show 3 cards in stack
        cardIndex={0}
      />
    </View>
  );
}
