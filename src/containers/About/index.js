import React from 'react';
import { AboutContainer, Paragraph, ProfPicAbout } from './style';
import Self from '../../assets/michaelsusanto-profile.png';

const About = () => {
    return (
        <AboutContainer>
            <ProfPicAbout src={Self} alt="ProfPic" style={{ width: '150px' }}/>
            <Paragraph>My name is Michael Susanto, i'm from Faculty of Computer Science, Universitas Indonesia.</Paragraph>
            <Paragraph>I started my programming career with Visual Basic 6.0 and since entering University, I started to learn about programming and now I develop web and mobile applications.</Paragraph>
            <Paragraph>Beside of that, I usually play musical instruments for refreshing and play badminton with friends to keep healthy</Paragraph>
        </AboutContainer>
    )
}

export default About;