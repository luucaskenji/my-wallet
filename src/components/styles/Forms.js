import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    input {
        font-family: 'Teko', sans-serif;
        font-size: 1.2rem;      
        width: 100%;
        height: 8vh;
        margin-bottom: 8px;
        border-radius: 5px;
        border: none;
        padding: 5px 10px;

        &:focus { outline: none; }
    }

    button {
        color: white;
        font-family: 'Teko', sans-serif;
        font-size: 1.3em;
        background-color: #A328D6;
        width: 100%;
        height: 8vh;
        border-radius: 5px;
    }
`;