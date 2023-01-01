import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";

const Settings = (props) =>{
    return(
      <View style ={myStyle.Body}>
      <TouchableOpacity onPress={() => {props.navigation.navigate('MySetting')}}>
          <Text>Go TO MySetting</Text>
      </TouchableOpacity>
      </View>
    )
}

const myStyle=StyleSheet.create({
    Body:{flex:1,backgroundColor:'#ddddcc'}
})
export const screenOptions = (navData) =>{
    return {
      headerTitle: 'Setting',
    }
  }

export default Settings;
