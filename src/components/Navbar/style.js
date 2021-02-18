import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    align-items: center;
    padding: 0 1rem;
    padding-right: 2rem;

    @media only screen and (max-width: 600px) {
        flex-flow: column wrap;
        padding-right: 1rem;
    }
`;

export const RightNav = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
`;