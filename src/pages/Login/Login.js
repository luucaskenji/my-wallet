import React, { useState } from 'react';

import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { Container } from './styles/LoginStyles';

export default function Login() {
    const [haveAnAccount, setHaveAnAccount] = useState(true);

    return (
        <Container>
            <div>
                <h1>My Wallet</h1>
                
                {haveAnAccount ? <SignIn /> : <SignUp setHaveAnAccount={setHaveAnAccount} />}
            </div>

            <button onClick={() => setHaveAnAccount(!haveAnAccount)}>
                {haveAnAccount ? 'Primeira vez? Crie sua conta!' : 'Já possui uma conta? Faça o login'}
            </button>
        </Container>
    );
}