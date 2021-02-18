import styled from 'styled-components';

export const PortfolioContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
`;

export const MoreInfo = styled.h3`
    @media only screen and (max-width: 450px) {
        font-size: 16px;
    }

    @media only screen and (max-width: 350px) {
        font-size: 14px;
    }
`;