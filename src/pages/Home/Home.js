import React, { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';

import { IoExitOutline } from 'react-icons/io5';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { MdRemoveCircleOutline } from 'react-icons/md';

import { Container } from './styles/HomePageStyles';

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
                <button>
                    <IoMdAddCircleOutline size='1.2rem' color='white' />
                    <span>Nova<br />entrada</span>
                </button>

                <button>
                    <MdRemoveCircleOutline size='1.2rem' color='white' />
                    <span>Nova<br />saída</span>
                </button>
            </div>
        </Container>
    );
}