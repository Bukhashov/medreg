import React, {useState} from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from '../screen/home/homeScreen';
import FshkScreen from '../screen/home/fshkScreen';
import InfoScreen from '../screen/home/infoScreen';
import InvitationScreen from '../screen/home/invitationScreen';
import MyDrugsScreen from '../screen/home/myDrugsScreen';
import RegistrationScreen from '../screen/home/registrationScreen';
import WaitingInLineScreen from '../screen/home/waitingInLineScreen';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" options={{ headerShown: false }} component={HomeScreen} />
            <Stack.Screen name="FshkScreen" options={{ headerShown: false }} component={FshkScreen} />
            <Stack.Screen name="InfoScreen" options={{ headerShown: false }} component={InfoScreen} />
            <Stack.Screen name="InvitationScreen" options={{ headerShown: false }} component={InvitationScreen} />
            <Stack.Screen name="MyDrugsScreen" options={{ headerShown: false }} component={MyDrugsScreen} />
            <Stack.Screen name="RegistrationScreen" options={{ headerShown: false }} component={RegistrationScreen} />
            <Stack.Screen name="WaitingInLineScreen" options={{ headerShown: false }} component={WaitingInLineScreen} />
        </Stack.Navigator>
    )
}

export default HomeNavigation;