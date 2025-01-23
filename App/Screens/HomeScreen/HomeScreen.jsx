
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import { Pedometer } from "expo-sensors";
import { Ionicons } from "@expo/vector-icons";
import Header from "./Header";
import { FontAwesome5 } from "@expo/vector-icons";
import quote from "../../Components/quote";

const { height, width } = Dimensions.get("window");
export default function HomeScreen() {
  const [stepCount, updateStepCount] = useState(0);

  useEffect(() => {
    subscribe();
  }, []);

  const subscribe = () => {
    Pedometer.watchStepCount((result) => {
      updateStepCount(result.steps);
    });
  };

  return (
    <View>
      <Header />
      <View>
    
        <FlatList
          data={quote}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width: width,
                  height: height / 2,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity 
                disabled={true}
                style={{width:'90%', height: '90%',  borderRadius: 10 }}>
               <View>
                <Image 
                style={styles.image}
                source={item.image}
                />
               </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
      <View style={{ paddingLeft: 20, }}>
        <View style={styles.container}>
          <View style={styles.stepHeader}>
            <Text style={styles.stepText}>Steps</Text>
            <Ionicons name="footsteps" size={30} color="red" />
          </View>
          <Text style={styles.stepCount}>{stepCount}</Text>
        </View>
      </View>
  

      {/* Horizontal container for the two small containers */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 250,
    backgroundColor: "#DEDEDE",
    borderRadius: 10,
    padding: 20,
  },
  stepText: {
    fontWeight: "700",
    fontSize: 30,
  },
  stepHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    justifyContent: "space-between",
  },
  stepCount: {
    textAlign: "center",
    paddingTop: 20,
    fontWeight: "500",
    fontSize: 80,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

});