import React, {useState} from 'react';
import './App.css';
import useCharacterListHook from "./hooks/useCharacterListHook";


function App() {

    const [endpoint, setEndpoint] = useState("character");
    const [count, setCount] = useState(1);
    const itemList = useCharacterListHook(count, endpoint);

    function selectCorrectItemsToDisplay(endpoint){
        if (endpoint == "character") {
            return itemList.map(character => <p>{character.name}, {character.status}</p>)
        }
        if (endpoint == "location") {
            return itemList.map(location => <p>{location.name}, {location.type}</p>)
        }
        if (endpoint == "episode") {
            return itemList.map(episode => <p>{episode.name}, {episode.episode}</p>)
        }


    }

  return (
    <div className="App">

        <button onClick = {() => setEndpoint("character")}>Character</button>
        <button onClick = {() => setEndpoint("location")}>Location</button>
        <button onClick = {() => setEndpoint("episode")}>Episode</button>

        {selectCorrectItemsToDisplay(endpoint)}

        {/*{itemList.map(character => <p>{character.name}, {character.status}</p>)}*/}

        {count > 1
            ? <button onClick = {() => setCount(count-1)}> Vorherige Seite ({count-1})</button>
            : <button disabled> Vorherige Seite </button>
        }

        {/*{count < 20
            ? */}<button onClick = {() => setCount(count+1)}> Nächste Seite ({count+1}) </button>
        {/*: <button disabled> Nächste Seite </button>*/
        }
        <p>Aktuelle Seite: {count}</p>

    </div>
  );
}

export default App;


