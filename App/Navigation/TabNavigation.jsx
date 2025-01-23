import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import WorkoutScreen from "../Screens/WorkoutScreen/WorkoutScreen";
import Trackingscreen from "../Screens/TrackingScreen/Trackingscreen";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MentalScreen from "../Screens/MentalScreen/MentalScreen";
import MainTrack from "../Screens/TrackingScreen/maintrack";
import Exercise from "../Components/Exercise";
import { NavigationContainer } from "@react-navigation/native";



const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 12, marginTop: -7 }}>Home</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="workout"
        component={WorkoutScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 12, marginTop: -7 }}>Workout</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="dumbbell" size={20
            } color={color} />
          ),
        }}
      />
      <Tab.Screen name="calories" component={Trackingscreen }
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 12, marginTop: -7 }}>Calories</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="food-turkey" size={size} color={color} />
          ),
        }}
      />
        <Tab.Screen name="Mental" component={MentalScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text style={{ fontSize: 12, marginTop: -7 }}>Mental Health</Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="brain" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="profile" component={ProfileScreen}
       options={{
        tabBarLabel: ({ color }) => (
          <Text style={{ fontSize: 12, marginTop: -7 }}>Profile</Text>
        ),
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="face-man-profile" size={size} color={color} />
        ),
      }} />
    </Tab.Navigator>
  );

}
