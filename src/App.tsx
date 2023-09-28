// the app function call the content component

import React from 'react';
import { useState } from 'react';
import Content from './components/Content';
import ThemeContext from './context/ThemeContext';
const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <Content />
    </ThemeContext.Provider>
  );
};

export default App;
