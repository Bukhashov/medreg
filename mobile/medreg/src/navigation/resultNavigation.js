import React, {useState} from 'react'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screen
import ResultsScreen from '../screen/results/resultsScreen';
import ResultScreen from '../screen/results/resultScreen';

const Stack = createNativeStackNavigator();

const ResultNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="resultsScreen">
            <Stack.Screen name="resultsScreen" options={{ headerShown: false }} component={ResultsScreen} />
            <Stack.Screen name="resultScreen" options={{ headerShown: false }} component={ResultScreen} />
        </Stack.Navigator>
    )
}

export default ResultNavigation;
