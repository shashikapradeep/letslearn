// src/navigation/StackNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

export type RootStackParamList = {
  Home: undefined;
  Profile: undefined;
};

const DefaultStack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
      <DefaultStack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: '#6200ee',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <DefaultStack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <DefaultStack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: 'Profile' }}
        />
      </DefaultStack.Navigator>
  );
}
