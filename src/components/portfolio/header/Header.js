import React from 'react';
import ProfPic from '../../../assets/michaelsusanto-profile.png'
import './Header.css';

function Header() {
	return (
		<header className="headline d-flex flex-column justify-content-around align-items-center">
			<img src={ProfPic} alt="Profile Picture" className="prof-pic" />
			<h1>Michael's Portfolio</h1>
			<h2>Here's what I have been to</h2>
		</header>
	)
}

export default Header