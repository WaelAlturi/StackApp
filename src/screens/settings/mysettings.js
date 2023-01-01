import React from "react";
import { View,Text,StyleSheet } from "react-native";

const MySettings = () =>{
    return(
        <View style ={myStyle.Body}>
            <Text>Hi</Text>
        </View>
    )
}

const myStyle=StyleSheet.create({
    Body:{flex:1,backgroundColor:'#ddddcc'}
})

export const screenOptions = (navData) =>{
    return {
      headerTitle: 'My Settings',
    }
  }

export default MySettings;
