import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-top: 8rem;

    @media only screen and (max-width: 600px) {
        padding: 2rem;
        margin-top: 4rem;
    }
`;

export const HomeContent = styled.div`
    display: flex;
    flex-flow: column wrap;
`;

export const ProfPic = styled.img`
    width: 250px;
    border-radius: 100%;
    margin-left: -10rem;
    margin-right: 5rem;

    @media only screen and (max-width: 1200px) {
        margin-left: -5rem;
    }

    @media only screen and (max-width: 1000px) {
        margin-left: 0;
    }

    @media only screen and (max-width: 600px) {
        width: 200px;
        margin-right: 0;
    }
`;