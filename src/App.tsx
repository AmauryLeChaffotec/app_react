import React, { FunctionComponent, useState, useEffect } from 'react';
import POKEMONS from './models/mock-pokemon';
import pokemon from './models/pokemon';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import {BrowserRouter as Router,Route, Switch, Link} from 'react-router-dom';


const App: FunctionComponent = () => {


    return (
        <Router>
            <div>
                {/*barre de nagigation commun à toutes les page*/}
                <nav>
                    <div className="nav-wrapper teal">
                        <Link to="/" className="brand-logo center">Pokédex</Link>
                    </div>
                </nav>
                {/*Le système de gestion des routes de notre application */}
                <Switch>
                    <Route exact path="/" component={PokemonList} />
                    <Route exact path="/pokemons" component={PokemonList} />
                    <Route exact path="/pokemons/edit/:id" component={PokemonEdit} />
                    <Route exact path="/pokemons/:id" component={PokemonDetail} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;