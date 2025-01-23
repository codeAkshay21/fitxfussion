import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import BodyParts from "../../Components/BodyParts";

export const bodyParts = [
  {
    name: "Back",
    image: require("../../../assets/back.jpg"),
  },
  {
    name: "Cardio",
    image: require("../../../assets/cardio.jpg"),
  },
  {
    name: "Chest",
    image: require("../../../assets/chest.jpg"),
  },
  {
    name: "Forearms",
    image: require("../../../assets/forearm.jpg"),
  },
  {
    name: "Calf & Tiba",
    image: require("../../../assets/calf.jpg"),
  },
  {
    name: "Neck",
    image: require("../../../assets/neck.jpg"),
  },
  {
    name: "Shoulder",
    image: require("../../../assets/shoulder.jpg"),
  },
  {
    name: "Arms",
    image: require("../../../assets/arms.jpeg"),
  },
  {
    name: "Quad & Hams",
    image: require("../../../assets/quad.jpg"),
  },
  {
    name: "Core",
    image: require("../../../assets/abs.jpeg"),
  },
];
export default function WorkoutScreen() {
  return (
    <View style={{ flex: 1 }}>
      <BodyParts />
    </View>
  );
}
