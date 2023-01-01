import React from "react";
import { View,Text,StyleSheet,Image } from "react-native";


const Product = (props) =>{
const hook = props.route.params.x;

  return(
    <View style={myStyle.Body}>
      <Image style={{width:'100%',height:400}} source={{url:hook.imageUrl}} />
    </View>
  )
}
      
const myStyle = StyleSheet.create({
  Body:{backgroundColor:'#d78444',flex:1},
})

export const screenOptions = (navData) =>{
  return {
    headerTitle: navData.route.params.x.firstName,
  }
}



export default Product;