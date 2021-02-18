import styled from 'styled-components';

export const Bold = styled.h1`
    font-weight: bold;
    font-size: 48px;
`;

export const Im = styled(Bold)`
    font-weight: normal;
    margin-right: 1rem;
`;

export const Name = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    margin-top: -2rem;
`;