import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background-color: #8C11BE;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Teko', sans-serif;

    h1 {
        color: white;
        font-size: 2rem;
        margin-bottom: 18px;
    }

    div {
        width: 80%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    & > button {
        font-size: 0.8rem;
        margin-top: 12px;
        color: white;
        text-decoration: underline;
        background: none;
    }
`;