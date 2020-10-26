import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import {connect} from 'react-redux';
import Dashboard from './Dashboard';
import Home from './Home';

function App(props) {
    return (
        <BrowserRouter>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/dashboard">
                <Dashboard />
            </Route>
        </BrowserRouter>
    )
}

export default App;