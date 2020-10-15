import React, {useEffect, useState} from 'react';
import axios from "axios";

export default function useCharacterListHook(){

    const [characterList, setCharacterList] = useState([]);

    const url = "https://rickandmortyapi.com/api/character";
    useEffect(() => {
            axios
                .get(url)
                .then(response => response.data.results)
                .then(listOfCharacters => setCharacterList(listOfCharacters))
        }, []
    );

    return characterList;

}