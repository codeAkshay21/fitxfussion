import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import { bodyParts } from "../Screens/WorkoutScreen/WorkoutScreen";
import LinearGradient from 'react-native-linear-gradient';
import { useRouter } from "expo-router";

export default function BodyParts() {
    const router = useRouter();
  return (
    <View style={{ marginLeft: 4 }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          paddingTop: 70,
          padding: 20,
        }}
      >
        Exercises
      </Text>
      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50,  }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <BodyPartsCard router={router} index={index} item={item} />
        )}
      />
    </View>
  );
}

const BodyPartsCard = ({ item, router, index }) => {
  return (
  <View>
    <TouchableOpacity
    onPress={()=>router.push({pathname: '/Exercise', params: item})}
    style ={{width: 190, height: 250 , justifyContent:'flex-end', padding: 4,paddingLeft:15, margin: 4}}>
    <Image
        source={item.image}
        resizeMode ="cover"
        style ={{width: 160, height:200, borderRadius: 20}}/>
        <Text style={{fontWeight: '600', paddingTop: 10, paddingLeft:60}}>
            {item?.name}
        </Text>
    </TouchableOpacity>
  </View>
  )
};
