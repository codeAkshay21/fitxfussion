import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '@clerk/clerk-react'; // Clerk hook for auth-related actions

export default function ProfileScreen() {
  const navigation = useNavigation();
  const { signOut } = useAuth(); // Get Clerk's sign-out function

  const handleLogout = () => {
    signOut(); // Log out with Clerk
    navigation.navigate('Login'); // After logout, navigate to the login screen
  };

  return (
    <View style={styles.container}><View></View>
      <Text style={styles.title}>Profile</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('HomeScreen')} />
      <Button title="Log Food" onPress={() => navigation.navigate('TrackScreen')} />
      <Button title="Mental Health" onPress={() => navigation.navigate('MentalScreen')} />
      <Button title="Logout" color="red" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingTop: 70,
    padding: 20
  },
});
