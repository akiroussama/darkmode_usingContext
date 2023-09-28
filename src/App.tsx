import { useState } from 'react';
import './App.css';
import Contenu from './components/Contenu';
import Sidebar from './components/Sidebar';
import { ThemeContext } from './context/ThemeContext';
function App() {
  const [theme, setTheme] = useState('clair');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme}`}>
        <h1>Mon Application</h1>
        <Sidebar />
        <Contenu />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
