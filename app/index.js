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
        <Text>Test</Text>
        <SwipeDeck />
      </View>
      <View>
        <Text>Hello</Text>
      </View>
    </View>
  );
}
