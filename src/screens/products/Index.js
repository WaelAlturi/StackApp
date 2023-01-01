import React,{useEffect,useState,useCallback} from "react";
import { View,Text,StyleSheet,Alert,TouchableOpacity,FlatList } from "react-native";
import MaterialCommunityIcons from'react-native-vector-icons/MaterialCommunityIcons'
import Characters from "./Character";
//Redux
import * as actions from '../../../strore/actions'

import {useDispatch,useSelector} from 'react-redux';
const MainProducts = (props) =>{
    const dispatch = useDispatch(); 
    const[character,setCharacter]= useState([]);
    const loadData = useCallback(async () => {
      const action = actions.getCharecters();
      try {
        
        dispatch(action);
      } catch (error) {
        Alert.alert('ERRRROR!!!!!!!!!')
      }
    },[dispatch,actions.getCharecters]) 
    
     
    
    const data = useSelector((state) => state.chareacters);
    

    useEffect( () =>{
      loadData();
    },[loadData])

      return(
    <View style={myStyle.Body}>
       <FlatList
       data={data.chareacters}
       keyExtractor = {item => item.id}
       renderItem = {itemRow => <Characters 
        character = {itemRow.item}
       onclick={()=>{props.navigation.navigate('Products',{x:itemRow.item})}}
       />
      }
       />
    </View>
  )
}

const myStyle = StyleSheet.create({
  Body:{backgroundColor:'#dddd',flex:1},
});

export const screenOptions = (navData) =>{
  return {
    headerTitle: 'Overview',
  //headerShown: false,//لاخفاء القائمه
    headerRight:() => (
    <MaterialCommunityIcons name='cart' color='#ffffff' size={30} onPress={() =>{navData.navigation.navigate('Cart')}} />
    ),
  }
}


export default MainProducts;