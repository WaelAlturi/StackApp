import React from "react";
import { View,Text,StyleSheet,Image ,TouchableOpacity} from "react-native";


const Continet = (props) =>{

  return(
        <View>
      <Text style={{fontSize:15,padding:5,fontWeight:'300'}}>{props.continets.name}</Text>
        </View>
  )
}
      

export default Continet;