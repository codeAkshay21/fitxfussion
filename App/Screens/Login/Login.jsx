import { View, Text,Image , StyleSheet,  TouchableOpacity} from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from '../../../hooks/useWarmUpBrowser';

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
  
  return (
    <View>
    <Image source={require('./../../../assets/logo1.png')} style={styles.loginImage} />
 
    <TouchableOpacity style ={styles.button} onPress={onPress}>
        <Text style={{textAlign: 'center', fontSize: 17, color:Colors.WHITE}}>
            G E T  S T A R T E D
        </Text>
    </TouchableOpacity>
    </View>

  )
}

const styles = StyleSheet.create({
  loginImage :{
    width: 390,
    height:740, 
    marginTop: 10,
  
    
  },
  button:{
    padding: 15,
    backgroundColor: Colors.BLACK,
    borderRadius: 100,
    marginRight: 50,
    marginLeft: 50,
    
  },
 
})
