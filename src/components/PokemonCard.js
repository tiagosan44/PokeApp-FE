import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import TypeColors from './helpers/Typecolors.js'
import './styles/PokemonCard.css'

const PokemonCard = ({ pokemon }) => {
    
    const StyledLink = styled(Link)`
        text-decoration: none;
        color: black;
        &:focus,
        &:hover,
        &:visited,
        &:link,
        &:active {
            text-decoration: none;
        }
    `;

    return (
        <div className="col-md-3 col-sm-5 mb-5">
            <StyledLink to={{
                    pathname: `/pokemon/${pokemon.id}`,
                    state: {
                        pokemonData: {pokemon} 
                    }    
                
                }
            }>
                <div className="card">
                    <div className="card-header">
                        <h5>{pokemon.id + ' ' + pokemon.name}</h5>
                    </div>
                    <div>
                        <img className="card-img-top rounded mx-auto mt-2" 
                            src={pokemon.sprites.front_default}/>
                    </div>
                    <div className="footer-card row">
                        <div className="col">
                            <div>
                                <h5>Weight</h5>
                                <h6>{pokemon.weight / 10} Kg</h6>
                            </div>
                            <div>
                                <h5>Types</h5>
                                {pokemon.types.map((type, i) => 
                                    <h6 className="badge badge-pill mr-1"
                                        key={type.type.name}
                                        style={{backgroundColor: `${TypeColors[type.type.name]}`,
                                            color: 'white'}}
                                        >
                                            {type.type.name}
                                    </h6>    
                                )} 
                            </div>
                        </div>
                        <div className="col">
                            <h5>Abilities</h5>
                            {pokemon.abilities.map((ability, i) => 
                                <>
                                <h6 key={ability.ability.name}>{ability.ability.name}</h6>  
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </StyledLink>
        </div>
    )

    
}

export default PokemonCard