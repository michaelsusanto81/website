import styled from 'styled-components';
import { ProfPic } from '../Home/style';

export const AboutContainer = styled.div`
    display: flex;
    flex-flow: column wrap;
    text-align: justify;
    padding: 3rem 5rem;
    margin: auto;
    justify-content: center;
    align-items: center;
    width: 40rem;

    @media only screen and (max-width: 800px) {
        width: auto;
    }

    @media only screen and (max-width: 500px) {
        padding: 3rem;
    }
`;

export const Paragraph = styled.p`
    font-size: 20px;

    @media only screen and (max-width: 500px) {
        font-size: 16px;
    }
`;

export const ProfPicAbout = styled(ProfPic)`
    margin: 0;
    margin-bottom: 1rem;
`;