import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import MainProducts,{screenOptions as MainProductsscreenOptions} from './screens/products/Index';
import Product,{screenOptions as ProductscreenOptions} from './screens/products/Product';
import Cart,{screenOptions as CartscreenOptions} from './screens/products/Cart';

import Account,{screenOptions as AccountscreenOptions} from './screens/account/index';
import MyAccount,{screenOptions as MyAccountscreenOptions} from './screens/account/myaccount';
import Settings,{screenOptions as SettingsscreenOptions} from './screens/settings/index';
import MySettings,{screenOptions as MySettingsscreenOptions} from './screens/settings/mysettings';

const defaultStyle = {
    headerStyle:{backgroundColor:'#d8315b'},
    headerTintColor:'#fff',

}
const Stack = createNativeStackNavigator();
export const ProductsStack = () =>{
    return(
        <Stack.Navigator screenOptions={defaultStyle}>
            <Stack.Screen name='MainProduct' component={MainProducts} options={MainProductsscreenOptions} />
            <Stack.Screen name='Products' component={Product} options={ProductscreenOptions} />
            <Stack.Screen name='Cart' component={Cart} options={CartscreenOptions} />
            <Stack.Screen name='Account' component={Account} options={AccountscreenOptions}/>
            <Stack.Screen name='MyAccount' component={MyAccount} options={MyAccountscreenOptions}/>
            <Stack.Screen name='Setting' component={Settings} options={SettingsscreenOptions}/>
            <Stack.Screen name='MySetting' component={MySettings} options={MySettingsscreenOptions}/>
        </Stack.Navigator> 
    )
}

const AccountNav = createNativeStackNavigator();
export const AccountStack = () =>{
    return(
        <AccountNav.Navigator screenOptions={defaultStyle}>
            <AccountNav.Screen name='Account' component={Account} options={AccountscreenOptions}/>
            <AccountNav.Screen name='MyAccount' component={MyAccount} options={MyAccountscreenOptions}/>
        </AccountNav.Navigator> 
    )
}

const SettingNav = createNativeStackNavigator();
export const SettingStack = () =>{
    return(
        <SettingNav.Navigator screenOptions={defaultStyle}>
            <SettingNav.Screen name='Setting' component={Settings} options={SettingsscreenOptions}/>
            <SettingNav.Screen name='MySetting' component={MySettings} options={MySettingsscreenOptions}/>
        </SettingNav.Navigator> 
    )
}

const TabsNavigator = createMaterialBottomTabNavigator();
export const Tabs = () => {
    return(
        <TabsNavigator.Navigator activeColor='red' inactiveColor='#ddd' barStyle={{backgroundColor:'#222222'}}>
            <TabsNavigator.Screen 
                name='dashbordTab' 
                options={{tabBarLabel:'Dashboard',tabBarIcon:({color}) => (<MaterialCommunityIcons name='view-dashboard' size={20} color={color} />)}}  
                component={ProductsStack}/>
            <TabsNavigator.Screen 
                name='accountTab' 
                options={{tabBarLabel:'Profile',tabBarIcon:({color}) => (<MaterialCommunityIcons name='crown' size={20} color={color} />)}} 
                component={AccountStack}/>
            <TabsNavigator.Screen 
                name='settingTab' 
                options={{tabBarLabel:'Settings',tabBarIcon:({color}) => (<MaterialCommunityIcons name='account-settings' size={20} color={color} />)}} 
                component={SettingStack}/>
        </TabsNavigator.Navigator>
    )
}