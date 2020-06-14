import React, { useState, useEffect } from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = ({pokemons}) => (
    
    <div className="row">
        {pokemons.map(pokemon => (
            <PokemonCard
                key={pokemon.id}
                pokemon={pokemon}
            />
        ))}
    </div>
)

export default PokemonList