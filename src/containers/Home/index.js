import React from 'react';
import Contact from '../../components/Home/Contact';
import Header from '../../components/Home/Header';
import { HomeContainer, HomeContent, ProfPic } from './style';
import Self from '../../assets/michaelsusanto-profile.png';

const Home = () => {
    return (
        <HomeContainer>
            <ProfPic src={Self} alt="ProfPic" />
            <HomeContent>
                <Header />
                <Contact />
            </HomeContent>            
        </HomeContainer>
    )
}

export default Home;