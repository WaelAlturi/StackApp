import React,{useState,useEffect} from "react";
import {Text,View,TextInput,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import firbaseConfig from '../firebaseConfig';
import AsyncStorage from "@react-native-async-storage/async-storage";
const Login = () => {
    
    const [loginView,setLoginView] = useState(true);
    const [email,setEmail] = useState('');
    const [Password,setPassWord] = useState('');
    const [errorMsg,setErrorMsg] = useState(null);

    useEffect(() => { 
        if(errorMsg != null){
            Alert.alert(errorMsg);
        }
     },[errorMsg])

    const signup = async() => {
        setErrorMsg(null);

        try {
            const user = await firbaseConfig.auth().createUserWithEmailAndPassword(email,Password);
        } catch (error) {
            // console.log(error.message);
            setErrorMsg(error.message);

        }
    }

    const login = async() => {
        setErrorMsg(null);
        try {
            const user = await firbaseConfig.auth().signInWithEmailAndPassword(email,Password);
            AsyncStorage.setItem('Account',JSON.stringify({
                
            }))
        } catch (error) {
            // console.log(error.message);
            setErrorMsg(error.message);
            
        }

    }
return (
    <View style={style.body}>
        {
            loginView ? (
                <View style={{width:'100%',marginTop:200}}>
                <Text style={{fontSize:24}}>Login</Text>
                <TextInput
                    placeholder="Email"
                    keyboardType='email-address'
                    style ={style.input}
                    value={email}//GET
                    onChangeText={text => setEmail(text)}//SET
                />
                <TextInput
                    placeholder="PassWord"
                    keyboardType='default'
                    style ={style.input}
                    value={Password}//GET
                    onChangeText={text => setPassWord(text)}//SET
                    secureTextEntry={true}
                />
                <TouchableOpacity style={{justifyContent:'center'}} onPress={login}>
                    <Text style={{paddingLeft:130,fontSize:20,backgroundColor:'green',height:40,borderRadius:12,marginTop:20}}>Sign in</Text>
                </TouchableOpacity>
            </View>
                
            ) : (
                <View style={{width:'100%',marginTop:200}}>
                <Text style={{fontSize:24}}>SignUp</Text>
                <TextInput
                    placeholder="Email"
                    keyboardType='email-address'
                    style ={style.input}
                    value={email}//GET
                    onChangeText={text => setEmail(text)}//SET
                />
                <TextInput
                    placeholder="PassWord"
                    keyboardType='default'
                    style ={style.input}
                    value={Password}//GET
                    onChangeText={text => setPassWord(text)}//SET
                    secureTextEntry={true}
                />
                <TouchableOpacity style={{justifyContent:'center'}} onPress={signup}>
                    <Text style={{paddingLeft:90,fontSize:20,backgroundColor:'green',height:40,borderRadius:12,marginTop:20}}>Creat New Account </Text>
                </TouchableOpacity>
            </View>
            )
        }
        <TouchableOpacity onPress={() => {setLoginView(!loginView)}}>
            <Text>Change View</Text>
        </TouchableOpacity>
    </View>
)
}
const style = StyleSheet.create({
    body: {flex:1,backgroundColor:'#dddd',padding:30},
    input:{ width:'100%',paddingVertical:12,backgroundColor:'#8009',borderRadius:12,padding:12,marginTop:20},
})

export default Login;