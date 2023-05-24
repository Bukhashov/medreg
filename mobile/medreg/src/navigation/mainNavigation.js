import React from 'react'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import ResultNavigation from './resultNavigation';
import HomeScreen from '../screen/home/homeScreen';
// Screen
import ProfileScreen from '../screen/auth/profileScreen';

const Tab = createBottomTabNavigator();

const MainNavigation = ({navigation}) => {
    
    const controller = async () => {
        try{
            await AsyncStorage.getItem('uid').then((data) => {
                if(data == "" || data == null) navigation.navigate('singin');
            })
        }
        catch(e) {
            console.log(`Error Main Navigation get token : ${e}`);
        }
    }

    useFocusEffect(
        React.useCallback(() => {
            controller();
        }, [])
    )
    
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                headerShown: true,
                tabBarIcon:  ({ focused, color, size }) => {
                    let iconName;
                    if(route.name === "Главный") {
                        iconName = focused ? 'home' : 'home-outline' 
                    }
                    else if (route.name === "Результаты") {
                        iconName = focused ? 'list' : 'list-outline' 
                    }
                    else if (route.name === "Қолданушы") {
                        iconName = focused ? 'person' : 'person-outline' 
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#86A5DF",
                tabBarStyle: {
                    backgroundColor:'#A5BDE9',
                    height: 60,
                },
                tabBarItemStyle: {
                    margin:5,    
                },
                
                headerStyle: {
                    backgroundColor:'#A5BDE9',
                    // borderBottomColor: "#fff",
                    // borderWidth: 1,
                },
                headerTitleStyle: {
                    color: '#fff',

                },
            })}
        >
            <Tab.Screen name="Главный"  component={HomeScreen} />
            <Tab.Screen name="Результаты" component={ResultNavigation} />
            <Tab.Screen name="Қолданушы" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default MainNavigation;