import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Button,
  ActivityIndicator,
} from "react-native";
import React from "react";
import FoodListItem from "../../Components/FoodListItem";
import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { Ionicons } from "@expo/vector-icons";
import {Camera} from 'expo-camera';

const query = gql`
  query search($ingr: String, $upc : String) {
    search(ingr: $ingr, upc: $upc) {
      text
      hints {
        food {
          label
          brand
          foodId
          nutrients {
            ENERC_KCAL
          }
        }
      }
    }
  }
`;

export default function Trackingscreen() {
  const [search, setSearch] = useState("");
  const [scannerEnabled, setScannerEnabled] = useState(false);

  const [runSearch, { data, loading, error }] = useLazyQuery(query);

  const [permission, requestPermission] =Camera.useCameraPermissions();
  
  requestPermission();

  const performSearch = () => {
    runSearch({ variables: { ingr: search } });
    setSearch("");
  };

  if (error) {
    return <Text> Failed to Search</Text>;
  }

  if (scannerEnabled) {
    return (
    <View>
    <Camera style={{width: '100%', height: '100%'}} onBarCodeScanned={(data)=> {
      console.log(data);
      runSearch({variables: {upc: data.data}})
      setScannerEnabled(false);
    }}/>
    <Ionicons onPress={()=> setScannerEnabled(false)} name="close" size={30} color="dimgray" style={{position: 'absolute', right: 10, top: 50}} />
    </View>
    )
  }

  const items = data?.search?.hints || [];

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search..."
          style={styles.input}
        />
        <Ionicons
          onPress={() => setScannerEnabled(true)}
          name="barcode-outline"
          size={35}
          color="dimgray"
        />
      </View>
      {search && <Button title="Search" onPress={performSearch} />}

      {loading && <ActivityIndicator />}
      <FlatList
        data={items}
        renderItem={({ item }) => <FoodListItem item={item} />}
        ListEmptyComponent={() => <Text> Search a Food </Text>}
        contentContainerStyle={{ gap: 5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff",
    padding: 10,
    paddingTop: 70,
    gap: 10,
  },
  input: {
    backgroundColor: "#f9f9f9",
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },
});
