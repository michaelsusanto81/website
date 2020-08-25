import React from 'react';
import PortfolioCard from './portfoliocard/PortfolioCard';
import Intern from '../../../assets/internship.jpg';
import SEA from '../../../assets/SeaPay-Compfest.jpg';
import TA from '../../../assets/TA-ProgFound1.jpg';
import DSC from '../../../assets/dsc.jpg';
import Sigap from '../../../assets/sigap.png';
import VehicleRecord from '../../../assets/vehicle-record.jpg';

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
					category="Group Project"
					description="Built an online e-wallet mobile app for Software Engineering Academy COMPFEST team's final project with Kotlin and Java Spring Boot."
				/>
				<PortfolioCard 
					image={TA}
					title="Teaching Assistant"
					category="Work"
					description="Undergraduate Teaching Assistant for Programming Foundation 1 International class, Programming Foundation 2 class, and Data Structure & Algorithm class."
				/>
				<PortfolioCard
					image={DSC}
					title="Developer Students Club Universitas Indonesia"
					category="Community"
					description="Pastly member and currently core team of DSC UI."
				/>
				<PortfolioCard
					image={Sigap}
					title="Sigap Fasilkom UI (sigap.cs.ui.ac.id)"
					category="Group Project"
					description="Led 18 engineers as Vice Person in Charge in volunteering at Faculty of Computer Science, Universitas Indonesia, to build a website for COVID-19 CrowdAid campaign website."
				/>
				<PortfolioCard
					image={VehicleRecord}
					title="Vehicle Record"
					category="Personal Project"
					description="A mobile application built with Flutter for research purposes at GDP Labs Summer Internship 2020."
				/>
			</div>
			<h5 className="text-center my-5 mx-5">See my other projects at my <a href="https://github.com/michaelsusanto81" target="_blank" rel="noreferrer">GitHub</a> and <a href="https://gitlab.com/michaelsusanto81" target="_blank" rel="noreferrer">GitLab</a></h5>
		</div>
	)
}

export default Content