import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import UserProvider from './contexts/UserContext';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Operation from './pages/MoneyOperation/MoneyOperation';

export default function App() {
    return (
        <UserProvider>
            <Router>
                <Switch>
                    <Route path='/dashboard' component={Home} />
                    <Route path='/new-register' component={Operation} />
                    <Route path='/' component={Login} />
                </Switch>
            </Router>
        </UserProvider>
    );
}