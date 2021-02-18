import React from 'react';
import ImgMediaCard from '../../components/Portfolio';
import { GITHUB_URL, GITLAB_URL, LINKEDIN_URL } from '../../constants';
import { experiences } from './experiences';
import { MoreInfo, PortfolioContainer } from './style';

const Portfolio = () => {
    return (
        <PortfolioContainer>
            {
                experiences.map(exp => (
                    <ImgMediaCard key={exp.title} exp={exp} />
                ))
            }
            <MoreInfo>See more on my <a href={GITHUB_URL} target="_blank" rel="noreferrer">GitHub</a>, <a href={GITLAB_URL} target="_blank" rel="noreferrer">GitLab</a>, and <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>.</MoreInfo>
        </PortfolioContainer>
    )
}

export default Portfolio;