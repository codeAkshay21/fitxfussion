import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import LoginScreen from '../Screens/LoginScreen/LoginScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Home" component={HomeScreen} /> {/* Screen name must match */}
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
