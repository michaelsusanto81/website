import styled from 'styled-components';

export const Bold = styled.h1`
    font-weight: bold;
    font-size: 48px;

    @media only screen and (max-width: 600px) {
        text-align: center;
    }

    @media only screen and (max-width: 500px) {
        font-size: 36px;
    }
`;

export const Im = styled(Bold)`
    font-weight: normal;
    margin-right: 1rem;

    @media only screen and (max-width: 600px) {
        text-align: center;
        margin-bottom: -1rem;
        margin-top: 3rem;
    }
`;

export const Name = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-top: -2rem;

    @media only screen and (max-width: 600px) {
        text-align: center;
        flex-flow: column wrap;
    }

    @media only screen and (max-width: 500px) {
        margin-bottom: 2.5rem;
    }
`;