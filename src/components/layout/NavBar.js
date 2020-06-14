import React from 'react'
import '../styles/NavBar.css'
import PokedexIcon from '../../images/PokedexIcon.png'

const NavBar = () => (
    <>
        <nav className="navbar navbar-expand-md fixed-top">
            <h3 className="text-light">Pokedex</h3>
            <img className="pokedexIcon" src={PokedexIcon}/>
        </nav>
    </>
)

export default NavBar