import React, { useState } from 'react';
import { Form } from '../../components/styles/Forms';
import { Container } from './styles/IncomePageStyles';

export default function Income() {
    const [value, setValue] = useState('');
    const [description, setDescription] = useState('');

    return (
        <Container>
            <h1>Nova entrada</h1>

            <Form>
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