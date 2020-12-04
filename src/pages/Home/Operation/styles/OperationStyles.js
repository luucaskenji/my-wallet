import styled from 'styled-components';

export const Container = styled.li`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 4px 0;

    span:last-child {
        color: ${({ type }) => type === 'Income' ? '#03AC00' : '#C70000'}
    }
`;