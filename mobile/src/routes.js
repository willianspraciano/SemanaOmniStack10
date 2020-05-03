import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ 
          headerTitleAlign:'center', 
          headerTintColor: '#FFF', 
          headerStyle:{ backgroundColor: '#7D40E7'},
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="Encontra aí" component={Main}/>
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Routes;