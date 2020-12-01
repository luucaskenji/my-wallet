import React, { useState } from 'react';

import { Form } from '../styles/LoginForms';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConf, setPasswordConf] = useState('');

    const processInfo = e => {
        e.preventDefault();
    }

    return (
        <Form onSubmit={processInfo}>
            <input 
                placeholder="Nome"
                onChange={e => setName(e.target.value)}
                value={name}
            />

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

            <input
                placeholder="Confirme a senha"
                onChange={e => setPasswordConf(e.target.value)}
                value={passwordConf}
                type="password" 
            />

            <button type="submit">Criar Conta</button>
        </Form>
    );
}