import React,{useEffect,useState,useCallback} from "react";
import { View,Text,StyleSheet,Alert,TouchableOpacity,FlatList } from "react-native";
import {useDispatch,useSelector} from 'react-redux';
import * as actions from '../../../strore/actions'
import Continet from './Continet'
import firebaseConfig from "../../firebaseConfig";

const Account = (props) =>{
    const dispatch = useDispatch(); 
    const loadData2 = useCallback(async () => {
        const action = actions.getContinents();
        try {
          
          dispatch(action);
        } catch (error) {
          Alert.alert('ERRRROR!!!!!!!!!')
        }
      },[dispatch,actions.getContinents]) 
      const data = useSelector((state) => state.continents);
      const user = firebaseConfig.auth().currentUser;
    useEffect( () =>{
      loadData2();
    },[loadData2])
    return(
        <View style={myStyle.Body}>

        <FlatList
        data={data.continents}
        keyExtractor = {item => item.id}
        renderItem = {itemRow => <Continet 
            continets = {itemRow.item}
        />
       }
        />
        <Text>{user.email}</Text>
        <TouchableOpacity onPress={() => {firebaseConfig.auth().signOut()}}>
          <Text>signOut</Text>
        </TouchableOpacity>
     </View>
    )
}

const myStyle=StyleSheet.create({
    Body:{flex:1,backgroundColor:'#ddddcc'}
})

export const screenOptions = (navData) =>{
    return {
      headerTitle: 'Acoount',
    }
  }

export default Account;
