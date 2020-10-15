import React, {useEffect, useState} from 'react';
import axios from "axios";

export default function useCharacterListHook(count, endpoint){

    const [characterList, setCharacterList] = useState([]);

    const url = "https://rickandmortyapi.com/api/" + endpoint + "/?page=" + count;
    useEffect(() => {
            axios
                .get(url)
                .then(response => response.data.results)
                .then(listOfCharacters => setCharacterList(listOfCharacters))
        }, [count, endpoint]
    );

    return characterList;

}