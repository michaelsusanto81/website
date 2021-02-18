import styled from 'styled-components';

export const ContactContainer = styled.div`
    display: flex;
    flex-flow: row wrap;

    @media only screen and (max-width: 600px) {
        justify-content: center;
    }
`;

export const ContactImg = styled.img`
    width: 30px;
    margin-right: 2rem;
    margin-left: -0.5rem;

    @media only screen and (max-width: 600px) {
        margin-left: 0;
        margin-right: 1rem;
    }
`;