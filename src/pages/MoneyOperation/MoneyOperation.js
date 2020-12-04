import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import { Form } from '../../components/styles/Forms';
import { Container } from './styles/OperationPageStyles';
import { UserContext } from '../../contexts/UserContext';

export default function Operation(props) {
    let [value, setValue] = useState('');
    const [description, setDescription] = useState('');
    const { userData } = useContext(UserContext);
    const { operationType } = props.location.state;
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
            createOperation();
        }
    };

    const createOperation = () => {
        const authHeaders = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        };

        axios
            .post('http://localhost:3000/finances/new-operation', { value, description, type: operationType }, authHeaders)
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
            <h1>{operationType === 'Income' ? 'Nova entrada' : 'Nova saída'}</h1>

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
                    {operationType === 'Income' ? 'Salvar entrada' : 'Salvar saída'}
                </button>
            </Form>
        </Container>
    );
}