import React from 'react';
import './index.css';

import {Home} from './components/home'
import {About} from './components/about'
import {Navigation} from './components/page_module_components/navigation'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
    return(
       <BrowserRouter>
        <div>

        <Navigation/>

       <Switch>
        <Route path='/' component = {Home} exact/>
        <Route path='/about' component = {About}/>
       </Switch>
       </div>
       </BrowserRouter>
    );
}

export default App;