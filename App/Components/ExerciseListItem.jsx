import { View, Text, StyleSheet, Pressable} from "react-native";
import React from "react";
import { Link } from 'expo-router';

export default function ExerciseListItem({item}){
    return (
      <Link href={'/Screens/WorkoutScreen/ExerciseDetail'} asChild>
      <Pressable style={styles.exercisecontainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        <Text style ={styles.subValue}>{item.muscle} </Text>| <Text style ={styles.subValue}>{item.equipment}</Text>
      </Text>
    </Pressable>
    </Link>
    )
  }

  const styles = StyleSheet.create({
    exercisecontainer: {
      backgroundColor: "#ffffff",
      padding: 10,
      borderRadius: 10,
      gap: 5,
      marginHorizontal: 2,

      // Shadow
      shadowColor: '#000',
      shadowOffset:{
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,


    },
    exerciseName: {
      fontSize: 20,
      fontWeight: "500",
    },
    exerciseSubtitle: {
      color: "dimgray",
    },
    subValue:{
   textTransform: 'capitalize'
    }
  });
  