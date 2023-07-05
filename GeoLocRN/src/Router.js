import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/LoginPage';
import Home from './pages/HomePage';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Login' screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router