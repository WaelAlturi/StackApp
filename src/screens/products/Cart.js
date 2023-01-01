import React from "react";
import { View,Text,StyleSheet } from "react-native";

const Cart = () =>{
  return(
    <View style={myStyle.Body}>
      <Text>
        Hi
      </Text>
    </View>
  )
}

const myStyle = StyleSheet.create({
  Body:{backgroundColor:'#dddd', alignItems:'center',justifyContent:'center',flex:1}
})

export const screenOptions = (navData) =>{
  return {
    headerTitle: 'Cart'
  }
}

export default Cart;