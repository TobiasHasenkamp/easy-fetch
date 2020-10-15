import React from 'react';
import './App.css';
import useCharacterListHook from "./hooks/useCharacterListHook";


function App() {

    const characterList = useCharacterListHook();

  return (
    <div className="App">

        {
            characterList.map(character => <p>{character.name}, {character.status}</p>)

        }

    </div>
  );
}

export default App;


