import React from 'react';
import ImgMediaCard from '../../components/Portfolio';
import { experiences } from './experiences';
import { PortfolioContainer } from './style';

const Portfolio = () => {
    return (
        <PortfolioContainer>
            {
                experiences.map(exp => (
                    <ImgMediaCard key={exp.title} exp={exp} />
                ))
            }
            <h3>See more on my <a href="https://github.com/michaelsusanto81" target="_blank" rel="noreferrer">GitHub</a>, <a href="https://gitlab.com/michaelsusanto81" target="_blank" rel="noreferrer">GitLab</a>, and <a href="https://id.linkedin.com/in/michaelsusanto81" target="_blank" rel="noreferrer">LinkedIn</a>.</h3>
        </PortfolioContainer>
    )
}

export default Portfolio;