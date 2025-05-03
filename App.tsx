import React, {JSX} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './src/theme/ThemeContext';
import StackNavigator from './src/navigation/StackNavigator';
import { enableScreens } from 'react-native-screens';
enableScreens();

export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
