import React from 'react';
import PortfolioCard from './portfoliocard/PortfolioCard';
import Intern from '../../../assets/internship.jpg';
import SEA from '../../../assets/SeaPay-Compfest.jpg';
import TA from '../../../assets/TA-ProgFound1.jpg';

function Content() {
	return (
		<div className="portfolio-container">
			<div className="container card-columns">
				<PortfolioCard 
					image={Intern}
					title="Software Development Engineer"
					category="Internship"
					description="Did research and analyze about Flutter Framework & its performance at GDP Labs (Kaskus Mobile Team)."
				/>
				<PortfolioCard 
					image={SEA}
					title="Software Engineering Academy Compfest 11"
					category="Project"
					description="Built an online wallet mobile app for Software Engineering Academy COMPFEST team's final project with Kotlin and Java Spring Boot."
				/>
				<PortfolioCard 
					image={TA}
					title="Teaching Assistant"
					category="Work"
					description="Undergraduate Teaching Assistant for Programming Foundation 1 International class and Programming Foundation 2 class."
				/>
			</div>
			<h5 className="text-center my-4">See my other projects at my <a href="https://github.com/michaelsusanto81" target="_blank">GitHub</a> and <a href="https://gitlab.com/michaelsusanto81" target="_blank">GitLab</a></h5>
		</div>
	)
}

export default Content