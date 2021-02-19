import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Main from './pages/Main';
import Repositorio from './pages/Repositorio';

export default function Routes(){
    return(
        <BrowserRouter>
            <switch>
                <Route exact path="/" component={Main} />
                <Route exact path="/repositorio" component={Repositorio} />
            </switch>
        </BrowserRouter>
    );
}