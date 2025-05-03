import * as React from 'react';
import {ThemeProvider} from './src/theme/ThemeContext';
import BottomNavigator from './src/navigation/BottomNavigator';

function App() {
  return (
    <ThemeProvider>
      <BottomNavigator/>
    </ThemeProvider>
  );
}

export default App;
