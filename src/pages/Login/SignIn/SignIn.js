import React, { useState } from 'react';
import axios from 'axios';

import { Form } from '../styles/LoginForms';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const validateAndSignIn = e => {
        e.preventDefault();

        axios
            .post('http://localhost:3000/user/sign-in', { email, password })
            .then(r => {
                console.log('Sessão iniciada')
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