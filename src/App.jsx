import { useState } from 'react';
import { personagens } from './data/characters';
import Home from './pages/Home';
import './styles/components.css';
import './styles/layout.css';
import './styles/responsive.css';
import './App.css';

function App() {
  const [selecionado, setSelecionado] = useState(null);
  const [mute, setMute] = useState(false);

  const handleSelect = (p) => {
    setSelecionado(p);
    if (!mute && p.som) {
      new Audio(p.som).play().catch(e => console.log(e));
    }
  };

  return (
    <Home 
      personagens={personagens}
      selecionado={selecionado}
      handleSelect={handleSelect}
      mute={mute}
      setMute={setMute}
    />
  );
}
export default App;