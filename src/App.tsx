import React, { createContext } from 'react';
import './App.css';
import Main_container from './components/Main_container';
import ThemeProvider from './ThemeContext';
interface Theme {
  DarkTheme: boolean;
}

export const ThemeContext = createContext<Theme>({
  DarkTheme: true,
});
function App() {
  return (
    <ThemeProvider>

      <div className="App">
        <Main_container />

      </div>
    </ThemeProvider>
  );
}

export default App;
