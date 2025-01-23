import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import { gql, useQuery } from "@apollo/client";
import dayjs from "dayjs";
import FoodLogListItem from "../../Components/FoodListItem";

const query = gql`
  query foodLogsForDate($date: Date!, $user_id: String!) {
    foodLogsForDate(date: $date, user_id: $user_id) {
      food_id
      user_id
      created_at
      label
      kcal
      id
    }
  }
`;

export default function MainTrack() {
  const user_id = "vadim";
  const { data, loading, error } = useQuery(query, {
    variables: {
      date: dayjs().format("YYYY-MM-DD"),
      user_id,
    },
  });

  if (loading) {
    return <ActivityIndicator/>;
  }

  if (error) {
    console.error("Error fetching food logs:", error);
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={styles.Main}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.HeaderText}>Calories </Text>
        <Text> 1770 - 360 = 1692</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.HeaderText}>Today's Food</Text>
        <Link href="/Trackingscreen" asChild>
          <Button title="Add Food" />
        </Link>
      </View>
      <FlatList
        data={data.foodLogsForDate}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <FoodLogListItem item={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  HeaderText: {
    fontSize: 18,
    fontWeight: "500",
    flex: 1,
    color: "dimgray",
  },
  Main: {
    flex: 1,
    padding: 10,
    gap: 10,
    paddingTop: 70,
  },
});
