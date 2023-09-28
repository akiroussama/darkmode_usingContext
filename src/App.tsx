import { useState } from 'react';
import './App.css';
import Contenu from './components/Contenu';
import Sidebar from './components/Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <h1>Mon Application</h1>
      <Sidebar />
      <Contenu />
    </div>
  );
}

export default App;
