import React from 'react'
import TypeColors from '../helpers/Typecolors.js'
import '../styles/Pokemon.css'

export default class Pokemon extends React.Component {
    
    render() {
        const { pokemonData } = this.props.location.state
        const { pokemon } = pokemonData
        return (
            <div className="col">
                <div className="card">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-5">
                            <h5>{pokemon.id}</h5>
                            </div>
                            <div className="col-7">
                                <div className="float-right">
                                    <div>
                                        <h4>Types</h4>
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
                            </div>
                        </div>   
                    </div>
                    <div className="card-body">
                        {/* <div className="row align-items-center"> */}
                        <div className="info-container">
                            <div className="pokemon-image">
                                <h2>Normal</h2>
                                <img src={pokemon.sprites.front_default}
                                    className="card-img-top rounded mx-auto mt-2 pokemon-img" 
                                />
                            </div>
                            <div className="pokemon-image">
                                <h2>Shiny</h2>
                                <img src={pokemon.sprites.front_shiny}
                                    className="card-img-top rounded mx-auto mt-2 pokemon-img" 
                                />
                            </div>
                            <div className="pokemon-info">
                                <h1>{pokemon.name}</h1>
                                <h6>{pokemon.description}.</h6>
                                <div className="abilities-container">
                                    <h4>Abilities</h4>
                                    {pokemon.abilities.map((ability, i) => 
                                        <>
                                        <h6 key={ability.ability.name}>{ability.ability.name}</h6>  
                                        </>
                                    )}
                                </div>
                            </div>
                            
                            <div className="pokemon-info">
                                
                                <div>
                                    <h4>Weight </h4><h6>{pokemon.weight / 10} kg</h6>
                                    <h4>Height</h4><h6>{pokemon.height * 10} Cm</h6>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <h3>Stats</h3>
                            {pokemon.stats.map((stat, i) =>
                                <div className="row allign-items-center">
                                    <div className="col-12 col-md3">{stat.stat.name}</div>
                                        <div className="col-12 col-md9">
                                            <div className="progress">
                                                <div className="progress-bar" role="progressBar"
                                                    style={{
                                                        width:`${stat.base_stat}%`
                                                    }}
                                                    aria-valuenow="25"
                                                    aria-valuemin="0"
                                                    aria-valuemax="100"
                                                >
                                                <small>{stat.base_stat}</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}