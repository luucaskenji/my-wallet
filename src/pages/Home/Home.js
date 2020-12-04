import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
    const history = useHistory();

    let userBalance = 0;
    if (userOperations.length) {
        userOperations.forEach(op => {
            userBalance += op.value;
        });
    }

    const authHeaders = {
        headers: {
            Authorization: `Bearer ${userData.token}`
        }
    };

    const signOut = () => {
        axios.post('http://localhost:3000/user/sign-out', null, authHeaders)
            .then(r => {
                history.push('/');
            })
            .catch(err => alert(err.response.data));
    }

    useEffect(() => {
        axios.get('http://localhost:3000/finances/user-operations', authHeaders)
            .then(r => setUserOperations(r.data))
            .catch(err => alert(err.response.data));
    }, []);

    return (
        <Container isEmpty={userOperations.length === 0} balanceIsNegative={userBalance < 0}>
            <header>
                <span>Olá, {userData.name}</span>

                <IoExitOutline
                    size='1.4rem'
                    color='white'
                    cursor='pointer'
                    onClick={signOut}
                />            
            </header>

            <ul>
                {
                    userOperations.length === 0 
                        ? 'Não há registros de entrada ou saída'
                        : userOperations.map(op => <Operation key={op.id} operation={op}/>)
                }
                {
                    userOperations.length > 0 && (
                        <div>
                            <span>SALDO</span>
                            <span>
                                {
                                    userOperations.length > 0 
                                        ? userBalance.toFixed(2).replace('.',',') 
                                        : '-'
                                }
                            </span>
                        </div>
                    )
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