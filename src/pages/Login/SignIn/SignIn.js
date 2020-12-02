import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Form } from '../styles/LoginForms';
import { UserContext } from '../../../contexts/UserContext';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const validateAndSignIn = e => {
        e.preventDefault();

        axios
            .post('http://localhost:3000/user/sign-in', { email, password })
            .then(r => {
                setUserData(r.data);
                history.push('/dashboard');
            })
            .catch(err => {
                alert(err.response.data);
            });
    }

    return (
        <Form onSubmit={validateAndSignIn}>
            <input 
                placeholder="E-mail"
                onChange={e => setEmail(e.target.value)}
                value={email}
            />

            <input
                placeholder="Senha"
                onChange={e => setPassword(e.target.value)}
                value={password}
                type="password"
            />

            <button type="submit">Entrar</button>
        </Form>
    );
}