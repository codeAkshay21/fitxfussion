import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

export default function Header() {
  const { user, isLoading } = useUser();
  return (
     
          <View style={styles.container}>
            <Image soruce={{ uri: user?.imageUrl}} style={styles.userImage} />
            <View>
              <Text>Welcome</Text>
              <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{user?.fullName}</Text>
            </View>
          </View>

    )
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 20,
    paddingTop: 30,
  },
  profilecontainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 99,
  },
});
