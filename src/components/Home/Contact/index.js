import React from 'react';
import FB from '../../../assets/fb-logo.png';
import MD from '../../../assets/medium.svg';
import GH from '../../../assets/github-logo.png';
import LI from '../../../assets/linkedin-logo.png';
import { ContactContainer, ContactImg } from './style';

const contacts = [
    {
        url: "https://www.facebook.com/michael.s.155",
        img: FB,
        alt: "Facebook",
    },
    {
        url: "https://medium.com/@michaelsusanto81",
        img: MD,
        alt: "Medium",
    },
    {
        url: "https://gitlab.com/michaelsusanto81",
        img: GH,
        alt: "GitHub",
    },
    {
        url: "https://id.linkedin.com/in/michaelsusanto81",
        img: LI,
        alt: "LinkedIn",
    },
]

const Contact = () => {
    return (
        <ContactContainer>
            {
                contacts.map(c => (
                    <a href={c.url} target="_blank" rel="noreferrer">
                        <ContactImg src={c.img} alt={c.alt} width="30px"/>
                    </a>                    
                ))
            }
        </ContactContainer>
    )
}

export default Contact;