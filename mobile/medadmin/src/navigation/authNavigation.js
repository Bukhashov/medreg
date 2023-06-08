import React, {useState} from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// Navigator
import MainNavigation from './mainNavigation';
import SingUpNavigation from './singupNavigation';
// Screen
import SinginScreen from '../screen/auth/singinScreen';


const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="mainNavigator">
            <Stack.Screen name="mainNavigator" options={{ headerShown: false }} component={MainNavigation} />
            <Stack.Screen name="singin" options={{ headerShown: false }} component={SinginScreen} />
            <Stack.Screen name="singup" options={{ headerShown: false }} component={SingUpNavigation} />
        </Stack.Navigator>
    )
}

export default AuthNavigation;