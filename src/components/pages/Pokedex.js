import React, { useState, useEffect }from 'react'
import PokemonList from '../PokemonList.js'
import { getAllPokemon, getPokemon } from '../services/PokemonsFetch.js';

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([])
    const [data, setData] = useState();
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const [error, setError] = useState();

    const initialURL = 'https://pokeapi.co/api/v2/pokemon'
    

    useEffect(() => {
        async function fetchData() {
            let response = await getAllPokemon(initialURL)
            setNextUrl(response.next);
            setPrevUrl(response.previous);
            await loadPokemon(response.results);
        }
        fetchData();
    }, []);

    const loadPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map(async pokemon => {
          let pokemonRecord = await getPokemon(pokemon)
          return pokemonRecord
        }))
        setPokemons(_pokemonData);
    }

    const next = async () => {
        let data = await getAllPokemon(nextUrl);
        await loadPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
    }
    
      const prev = async () => {
        
        let data = await getAllPokemon(prevUrl);
        await loadPokemon(data.results);
        setNextUrl(data.next);
        setPrevUrl(data.previous);
    }

    return (
        <>
            <div className="btn">
                <button className="btn btn-danger" onClick={prev}>Prev</button>
                <button className="btn btn-danger" onClick={next}>Next</button>
            </div>
            <div className="row">
                <div className="col">
                    <PokemonList data={data} pokemons={pokemons}/>
                </div>
            </div>
        </>
    )
}

export default Pokedex