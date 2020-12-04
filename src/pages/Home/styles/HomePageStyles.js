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
        display: flex;
        flex-direction: column;
        justify-content: ${({ isEmpty }) => isEmpty ? 'center' : 'flex-start'};
        align-items: center;
        font-family: 'Teko', sans-serif;
        font-size: 1.4rem;
        color: #868686;
        padding: 15px 15px 0 15px;
        overflow-y: scroll;
        position: relative;

        & > div:last-child {
            background-color: white;
            position: sticky;
            bottom: 0;
            left: 0;
            border-radius: 5px;
            width: 100%;
            padding: 8px 15px;
            margin: 0;

            span:last-child {
                color: ${({ balanceIsNegative }) => balanceIsNegative ? '#C70000' : '#03AC00'}
            }
        }
    }

    div {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

        a {
            height: 120px;
            width: 48%;
            background-color: #A328D6;
            border-radius: 5px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            text-align: left;
            color: white;
            padding-left: 10px;
        }

        span {
            font-size: 1.1rem;
            font-family: 'Teko', sans-serif;
            line-height: 25px;
            letter-spacing: 1.6px;
        }
    }
`;