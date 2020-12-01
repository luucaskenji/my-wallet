import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login';

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path='/'>
                    <Login />
                </Route>
            </Switch>
        </Router>
    );
}