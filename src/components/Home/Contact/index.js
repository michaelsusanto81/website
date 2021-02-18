import React from 'react';
import FB from '../../../assets/fb-logo.png';
import MD from '../../../assets/medium.svg';
import GH from '../../../assets/github-logo.png';
import LI from '../../../assets/linkedin-logo.png';
import { ContactContainer, ContactImg } from './style';
import { FB_URL, GITHUB_URL, LINKEDIN_URL, MEDIUM_URL } from '../../../constants';

const contacts = [
    {
        url: FB_URL,
        img: FB,
        alt: "Facebook",
    },
    {
        url: MEDIUM_URL,
        img: MD,
        alt: "Medium",
    },
    {
        url: GITHUB_URL,
        img: GH,
        alt: "GitHub",
    },
    {
        url: LINKEDIN_URL,
        img: LI,
        alt: "LinkedIn",
    },
]

const Contact = () => {
    return (
        <ContactContainer>
            {
                contacts.map(c => (
                    <a href={c.url} target="_blank" rel="noreferrer" key={c.url}>
                        <ContactImg src={c.img} alt={c.alt} width="30px"/>
                    </a>                    
                ))
            }
        </ContactContainer>
    )
}

export default Contact;