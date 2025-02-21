import { Text, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { petData as petDataArray } from "../utils/data.js";
import Card from "../components/Card.js";
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  const [petData, setPetData] = useState(petDataArray);

  useEffect(() => {
    if(!petData.length){
      setPetData(petData)
    }
  }, [petData.length])

  return (
    <View style={{ flex: 1, alignItems: "center", backgroundColor: "white" }}>
      <StatusBar hidden={true} />
      {
        petData.map(({name, age, breed, image}, index) => {
          const isFirst = index === 0;
          return (
            <Card
              key={name}
              name={name}
              age={age}
              breed={breed}
              image={image}
              isFirst={isFirst}
            />
          )
        })
      }
    </View>
  );
}
