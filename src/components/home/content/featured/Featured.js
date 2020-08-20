import React from 'react';
import SkillCard from './skillcard/SkillCard';
import Python from '../../../../assets/python-logo.png';
import Java from '../../../../assets/java-logo.png';
import Ruby from '../../../../assets/ruby-logo.png';
import Flutter from '../../../../assets/flutter-logo.png';
import Android from '../../../../assets/android-logo.png';
import ReactLogo from '../../../../logo.svg';
import './Featured.css'

function Featured() {
	return (
		<section className="skills d-flex flex-column justify-content-around align-items-center">
			<h3>My Techstack</h3>
			<div className="skills-layout">
				<ul className="left-skills">
					<SkillCard image={Python} skillname="Python" />
					<SkillCard image={Flutter} skillname="Flutter" />	
				</ul>
				<ul className="middle-skills">
					<SkillCard image={Java} skillname="Java" />
					<SkillCard image={Android} skillname="Android" />
				</ul>
				<ul className="right-skills">
					<SkillCard image={Ruby} skillname="Ruby" />
					<SkillCard image={ReactLogo} skillname="React" />
				</ul>
			</div>			
		</section>
	)
}

export default Featured