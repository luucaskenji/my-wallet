import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Form } from '../../../components/styles/Forms';

export default function SignUp({ setHaveAnAccount }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const history = useHistory();

    const validateAndSignUp = e => {
        e.preventDefault();

        if (!name || !email || !password || !passwordConfirmation) return alert('Preencha todos os campos');

        axios
            .post('http://localhost:3000/user/sign-up', { name, email, password, passwordConfirmation })
            .then(r => {
                setHaveAnAccount(true);
                history.push('/');
            })
            .catch(err => {
                err.response.status === 422
                    ? alert('Erro. Por favor verifique os dados novamente')
                    : alert(err.response.data);
            });
    }

    return (
        <Form onSubmit={validateAndSignUp}>
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
                onChange={e => setPasswordConfirmation(e.target.value)}
                value={passwordConfirmation}
                type="password" 
            />

            <button type="submit">Criar Conta</button>
        </Form>
    );
}