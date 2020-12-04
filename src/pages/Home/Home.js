import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { UserContext } from '../../contexts/UserContext';
import { Container } from './styles/HomePageStyles';

import { IoExitOutline } from 'react-icons/io5';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdRemoveCircleOutline } from 'react-icons/md';
import Operation from './Operation/Operation';


export default function Home() {
    const [userOperations, setUserOperations] = useState([]);
    const { userData } = useContext(UserContext);

    useEffect(() => {
        const authHeaders = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        };

        axios.get('http://localhost:3000/finances/user-operations', authHeaders)
            .then(r => setUserOperations(r.data))
            .catch(err => alert(err.response.data));
    }, []);

    return (
        <Container isEmpty={userOperations.length === 0}>
            <header>
                <span>Olá, {userData.name}</span>
                <IoExitOutline size='1.4rem' color='white' />            
            </header>

            <ul>
                {
                    userOperations.length === 0 
                        ? 'Não há registros de entrada ou saída'
                        : userOperations.map(op => <Operation key={op.id} operation={op}/>)
                }
            </ul>

            <div>
                <Link to={{
                    pathname: '/new-operation',
                    state: {operationType: 'Income'}
                }}>
                    <IoMdAddCircleOutline size='1.2rem' color='white' />
                    <span>Nova<br />entrada</span>
                </Link>

                <Link to={{
                    pathname: '/new-operation',
                    state: {operationType: 'Expense'}
                }}>
                    <MdRemoveCircleOutline size='1.2rem' color='white' />
                    <span>Nova<br />saída</span>
                </Link>
            </div>
        </Container>
    );
}