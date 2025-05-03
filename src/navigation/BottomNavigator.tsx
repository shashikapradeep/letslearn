import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

const HomeIcon = ({color, size}: {color: string, size: number}) => (
  <Icon name="home" color={color} size={size} />
);

export default function BottomNavigator() {
  return (
    <NavigationContainer>
    <Tab.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={StackNavigator} options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen name="Settings" component={StackNavigator}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}
