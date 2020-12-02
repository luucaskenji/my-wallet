import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UserProvider from './contexts/UserContext';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';

export default function App() {
    return (
        <UserProvider>
            <Router>
                <Switch>
                    <Route path='/dashboard'>
                        <Home />
                    </Route>
                    <Route path='/'>
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </UserProvider>
    );
}