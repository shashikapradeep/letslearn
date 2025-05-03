import * as React from 'react';
import StackNavigator from './src/navigation/StackNavigator';
import {ThemeProvider} from './src/theme/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <StackNavigator />
    </ThemeProvider>
  );
}

export default App;
