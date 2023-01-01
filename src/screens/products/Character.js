import React from "react";
import { View,Text,StyleSheet,Image ,TouchableOpacity} from "react-native";


const Characters = (props) =>{

  return(
    <TouchableOpacity onPress={props.onclick} style={{flex:1,backgroundColor:'#861',padding:10}}>
        <View style={myStyle.Body}>
            
      <Image style={{width:'30%',height:130}} source={{url:props.character.imageUrl}} />
      <View style={{flexDirection:'column'}}>
      <Text style={{fontSize:20,padding:5,fontWeight:'800'}}>{props.character.fullName}</Text>
      <Text style={{fontSize:15,padding:5,fontWeight:'300'}}>{props.character.title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
      
const myStyle = StyleSheet.create({
  Body:{backgroundColor:'#ddd',flexDirection:'row',borderRadius:20},
})



export default Characters;