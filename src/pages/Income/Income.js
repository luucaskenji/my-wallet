import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Form } from '../../components/styles/Forms';
import { Container } from './styles/IncomePageStyles';
import { UserContext } from '../../contexts/UserContext';

export default function Income() {
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const { userData } = useContext(UserContext);
    const history = useHistory();

    const verifyInputs = e => {
        e.preventDefault();

        const invalidValueInput = !value.includes(',') || value.includes('R$') || value.split(',')[1].length !== 2;

        if (!value) {
            return alert('Por favor, informe o valor');
        }
        else if (invalidValueInput) {
            return alert('Por favor, insira o valor:\n- Separado por vírgula\n- Informando valor dos centavos\n- Sem incluir R$');
        }
        else {
            createIncome();
        }
    };

    const createIncome = () => {
        const authHeaders = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        };

        axios
            .post('http://localhost:3000/finances/new-income', { value, description }, authHeaders)
            .then(r => {
                history.push('/dashboard');
            })
            .catch(err => {
                err.response.status === 422
                    ? alert('Erro. Por favor verifique os dados novamente')
                    : alert(err.response.data)
            })
    };

    return (
        <Container>
            <h1>Nova entrada</h1>

            <Form onSubmit={verifyInputs}>
                <input 
                    placeholder='Valor'
                    onChange={e => setValue(e.target.value)}
                    value={value}
                />

                <input
                    placeholder='Descrição'
                    onChange={e => setDescription(e.target.value)}
                    value={description}
                />

                <button type='submit'>
                    Salvar entrada
                </button>
            </Form>
        </Container>
    );
}