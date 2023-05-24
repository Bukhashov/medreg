import React from 'react'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// Screen


import ProfileScreen from '../screen/home/homeScreen';

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
                        iconName = focused ? 'people' : 'people-outline' 
                    }
                    else if (route.name === "Пользователь") {
                        iconName = focused ? 'person' : 'person-outline' 
                    }
                    return <Ionicons name={iconName} size={size} color={color} />
                },
                tabBarStyle: {
                    backgroundColor:'#fff',
                    height: 60,
                    // borderTopColor: "#fff",
                    // borderWidth: 1,
                },
                tabBarItemStyle: {
                    margin:5,
                    
                    //borderRadius:10,
                },
                headerStyle: {
                    backgroundColor:'#fff',
                    // borderBottomColor: "#fff",
                    // borderWidth: 1,
                },
                headerTitleStyle: {
                    color: '#000',

                },
            })}
        >
            <Tab.Screen name="Главный"  component={ProfileScreen} />
            <Tab.Screen name="Результаты" component={ProfileScreen} />
            <Tab.Screen name="Пользователь" component={ProfileScreen} />
        </Tab.Navigator>
    )
}

export default MainNavigation;