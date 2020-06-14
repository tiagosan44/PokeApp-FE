import React from 'react';
import './styles/App.css';
import NavBar from './layout/NavBar'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Pokedex from './pages/Pokedex'
import Pokemon from './pages/Pokemon'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Pokedex}/>
            <Route exact path="/pokemon/:pokemonId" component={Pokemon}/>
            <Route component={NotFound}/> 
          </Switch>
          
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
