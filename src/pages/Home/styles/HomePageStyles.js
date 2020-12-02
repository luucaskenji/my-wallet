import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background-color: #8C11BE;
    padding: 15px;
    display: flex;
    flex-direction: column;

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        span {
            font-size: 1.6rem;
            color: white;
            font-family: 'Teko', sans-serif;
        }
    }

    ul {
        flex-grow: 1;
        background-color: white;
        border-radius: 5px;
    }

    div {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

        button {
            height: 120px;
            width: 48%;
            background-color: #A328D6;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            text-align: left;
            color: white;
        }

        span {
            font-size: 1.1rem;
            font-family: 'Teko', sans-serif;
            line-height: 25px;
            letter-spacing: 1.6px;
        }
    }
`;