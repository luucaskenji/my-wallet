import React, { useState } from 'react';

import { Form } from '../styles/LoginForms';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const processInfo = e => {
        e.preventDefault();
    }

    return (
        <Form onSubmit={processInfo}>
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