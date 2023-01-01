import React,{useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {ProductsStack,Tabs} from './src/Navigation'
import firebaseConfig from './src/firebaseConfig';

//IMPORT REDUX 
import { createStore ,combineReducers,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import Login from './src/screens/Login';
//IMPORT THE REDUCER FILE(S)
import appReducer from './strore/reducer'
const rootReducer =combineReducers({
  chareacters: appReducer,
  continents:appReducer,
  
});
//SandBox
const appStore = createStore(rootReducer,applyMiddleware(reduxThunk));


export default function App () {

  const [isConnected,setConnected] = useState(false);

  if(firebaseConfig.apps.length){
    firebaseConfig.auth().onAuthStateChanged((user) => {
      setConnected(!!user);
    })
  }


  return(
      <Provider store={appStore}>
        <NavigationContainer>
          {
            isConnected ? (<Tabs/>) :(<Login/>)
          }
        </NavigationContainer>
      </Provider>
  );
}
