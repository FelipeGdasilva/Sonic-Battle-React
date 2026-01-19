
import { useState } from "react";
import characters from "./data/characters";
import Character from "./components/Character";
import "./App.css";
import "./styles/layout.css";
import "./styles/components.css";
import "./styles/responsive.css";


function App() {
  const [selected, setSelected] = useState(null);
  const [soundOn, setSoundOn] = useState(true)

  function handleSelect(character) {
    setSelected(character);

    if (! soundOn || !character.sound)
    return;

    const audio = new Audio(character.sound);
    audio.volume = 0.5;
    audio.play().catch(() =>{});
  }

  return (
    <div className="app">

      <header className="top-bar">
      <h1>Seleção de Personagens</h1>

      <button className="sound-toggle" onClick={() => setSoundOn(!soundOn)}>
        {soundOn ? "🔊" : " 🔈 "}
      </button>
</header>
      <div className="container">
        <ul className="list">
          {characters.map((char) => (
            <Character
              key={char.id}
              character={char}
              isSelected={selected?.id === char.id}
              onSelect={handleSelect}
            />
          ))}
        </ul>

        <div className="info">
          {selected ? (
            <>
            <div className="preview">
            <img
            src={selected.image}
            alt={selected.name}
            className="big-image"
            />
              <h2>{selected.name}</h2>
             </div>
            </>
          ) : (
            <p>Selecione um personagem</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
