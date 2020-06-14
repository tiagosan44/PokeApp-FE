import React from 'react'
import TypeColors from '../helpers/Typecolors.js'
import axios from 'axios'

export default class Pokemon extends React.Component {
    state = {
        
    }

    componentDidMount() {
        const { pokemonData } = this.props.location.state

        console.log(pokemonData.pokemon)

        // let { hp, attack, defense, spped, specialAtack, specialDefense } 
    }
    
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
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <img src={pokemon.sprites.front_default}
                                    className="card-img-top rounded mx-auto mt-2 pokemon-img" 
                                />
                            </div>
                            <div className="col-md-4">
                                <h2>{pokemon.name}</h2>
                                <h6>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h6>
                            </div>
                            <div>
                                <h4>Abilities</h4>
                                {pokemon.abilities.map((ability, i) => 
                                    <>
                                    <h5 key={ability.ability.name}>{ability.ability.name}</h5>  
                                    </>
                                )}
                            </div>
                            <div>
                                <h6>Weight {pokemon.weight}</h6>
                            </div>
                            <div>
                                <h6>Evolutions</h6>
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


                    
                    
                    // <div>
                    //     <h3>Stats</h3>
                    //     {pokemon.stats.map((stat, i) => 
                    //         <>
                    //         <h4 key={stat.stat.name}>{stat.stat.name}</h4>  
                    //         <h4 key={i}>{stat.base_stat}</h4>  
                    //         </>
                    //     )}
                    // </div>
                    // <div>
                    //     <h3>Height</h3>
                    //     <div>{pokemon.height * 10} Cm</div>
                    // </div>
                    // <div>
                    //     <h3>Weight</h3>
                    //     <div>{pokemon.weight / 10} Kg</div>
                    // </div>

                    // <div>
                    //     <h3>Abilities</h3>
                    //     {pokemon.abilities.map((ability, i) => 
                    //         <>
                    //         <h4 key={ability.ability.name}>{ability.ability.name}</h4>  
                    //         </>
                    //     )}
                    // </div>
                
        )
    }
}