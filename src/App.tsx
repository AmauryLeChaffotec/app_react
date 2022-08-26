import React, { FunctionComponent, useState, useEffect } from 'react';
import POKEMONS from './models/mock-pokemon';
import pokemon from './models/pokemon';
import PokemonList from './pages/pokemon-list';
import PokemonDetail from './pages/pokemon-detail';
import PageNotFound from './pages/page-not-found';
import PokemonEdit from './pages/pokemon-edit';
import {BrowserRouter as Router,Route, Switch, Link} from 'react-router-dom';
import PokemonAdd from './pages/pokemon-add';
import Login from './pages/login';
import PrivateRoute from './PrivateRoute';

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
                    <PrivateRoute exact path="/" component={PokemonList} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute  exact path="/pokemons" component={PokemonList} />
                    <PrivateRoute  exact path="/pokemon/add" component={PokemonAdd} />
                    <PrivateRoute  exact path="/pokemons/edit/:id" component={PokemonEdit} />
                    <PrivateRoute  exact path="/pokemons/:id" component={PokemonDetail} />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    )
}

export default App;