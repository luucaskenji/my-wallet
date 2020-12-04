import React from 'react';

import { Container } from './styles/OperationStyles';

export default function Operation({ operation }) {
    const { value, description, type } = operation;
    
    let formattedValue = value.toFixed(2);
    formattedValue = formattedValue.replace('.', ',');

    return (
        <Container type={type}>
            <span>{description}</span>
            <span>{formattedValue}</span> 
        </Container>
    );
}