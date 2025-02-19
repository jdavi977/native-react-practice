import { Text, View } from "react-native";
import SwipeDeck from "../components/SwipeDeck";


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View>
        <SwipeDeck />
      </View>
      <View></View>
    </View>
  );
}
