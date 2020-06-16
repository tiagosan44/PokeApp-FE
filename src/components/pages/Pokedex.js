import React, { useState, useEffect }from 'react'
import PokemonList from '../PokemonList.js'
import { getAllPokemon, getPokemon } from '../services/PokemonsFetch.js';
import '../styles/Pokedex.css'

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([])
    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');
    const initialURL = 'http://pokedexbe-env-1.eba-8rgwcvbg.us-east-1.elasticbeanstalk.com/api/pokemon'
    
    

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
            
            <button className="page-btn btn btn-danger" onClick={prev}>Prev</button>
            <button className="page-btn btn btn-danger" onClick={next}>Next</button>
            <div className="row">
                <div className="col">
                    <PokemonList pokemons={pokemons}/>
                </div>
            </div>
            <button className="page-btn btn btn-danger" onClick={prev}>Prev</button>
            <button className="page-btn btn btn-danger" onClick={next}>Next</button>
        </>
    )
}

export default Pokedex