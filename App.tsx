import React, { JSX } from 'react';
import { ThemeProvider } from './src/theme/ThemeContext';
import MainScreen from './src/screens/Home';

export default function App(): JSX.Element {
  return (
    <ThemeProvider>
      <MainScreen />
    </ThemeProvider>
  );
}
