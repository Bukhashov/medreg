import React, {useState} from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen
import UserFullNameScreen from '../screen/auth/singup/userFullNameScreen';
import AuthUserPasswordScreen from '../screen/auth/singup/authUserPasswordScreen';

const Stack = createNativeStackNavigator();

const SingUpNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="mainNavigator">
            <Stack.Screen name="userNameScreen" options={{ headerShown: false }} component={UserFullNameScreen} />
            <Stack.Screen name="authUserPasswordScreen" options={{ headerShown: false }} component={AuthUserPasswordScreen} />
        </Stack.Navigator>
    )
}

export default SingUpNavigation;