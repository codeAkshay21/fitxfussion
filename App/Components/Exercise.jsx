import { TouchableOpacity, View } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect } from "react";
import { fetchExerciseByBodypart } from "../../api/exerciseDB";


export default function Exercise() {
  const router = useRouter();
  const item =useLocalSearchParams();

  useEffect(()=>{
    if(item) getExercise (item.name)
  },[item]);

const getExercise =async(bodyPart)=>{
  let data = await fetchExerciseByBodypart(bodyPart);
  
}

  return (
    <View style={{marginTop: 20}}>
      <Text> Exercise </Text>
      <TouchableOpacity onPress={()=> router.back()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}
