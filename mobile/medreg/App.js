import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import AuthNavigation from './src/navigation/authNavigation';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#4E5C75'
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <AuthNavigation />
    </NavigationContainer>
  );
}