import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { UserContext } from '../../contexts/UserContext';
import { Container } from './styles/HomePageStyles';

import { IoExitOutline } from 'react-icons/io5';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdRemoveCircleOutline } from 'react-icons/md';


export default function Home() {
    const { userData } = useContext(UserContext);

    return (
        <Container>
            <header>
                <span>Olá, {userData.name}</span>
                <IoExitOutline size='1.4rem' color='white' />            
            </header>

            <ul>

            </ul>

            <div>
                <Link to={{
                    pathname: '/new-register',
                    state: {operationType: 'Income'}
                }}>
                    <IoMdAddCircleOutline size='1.2rem' color='white' />
                    <span>Nova<br />entrada</span>
                </Link>

                <Link to={{
                    pathname: '/new-register',
                    state: {operationType: 'Expense'}
                }}>
                    <MdRemoveCircleOutline size='1.2rem' color='white' />
                    <span>Nova<br />saída</span>
                </Link>
            </div>
        </Container>
    );
}