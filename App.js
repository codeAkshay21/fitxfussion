import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from "./App/Screens/Login/Login"
import { ClerkProvider,SignedIn,SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigation/TabNavigation';
import * as SecureStore from 'expo-secure-store'
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';


export const rapidApiKey = '99e572c1a1msh851eacf0aa67ff6p1410a6jsnb37112c03efc'

const client = new ApolloClient({
  uri: ' https://chellal.us-east-a.ibm.stepzen.net/api/washing-macaw/__graphql',
  cache: new InMemoryCache(),
  headers: {
    Authorization: "apikey chellal::local.net+1000::d68394e6c007cc7b45e72c12eaf8eecc49a44927a1be3e8764525104aff78cd8",
  }
});

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key ,value ) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};


export default function App() {
  return (

   <ClerkProvider 
   tokenCache={tokenCache}
   publishableKey='pk_test_ZmFpdGhmdWwtZG9iZXJtYW4tNDUuY2xlcmsuYWNjb3VudHMuZGV2JA' >
     <ApolloProvider client={client}>
    <View style={styles.container}>
     <SignedIn>
        < NavigationContainer>
        <TabNavigation/>
        </NavigationContainer>
        </SignedIn>
        <SignedOut>
        <Login/>
        </SignedOut>
      <StatusBar style="auto" />
    </View>
    </ApolloProvider>
    </ClerkProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
 
  },
});
