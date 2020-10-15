import React from 'react';
import './App.css';
import useCharacterListHook from "./hooks/useCharacterListHook";


function App() {

    const characterList = useCharacterListHook();

  return (
    <div className="App">

        {
            characterList.map(character => <CharacterCard>{character.name}, {character.status}</CharacterCard>)
        }

    </div>
  );
}

export default App;


