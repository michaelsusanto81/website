import React from 'react';
import ProfPic from '../../../../assets/michaelsusanto-profile.png'
import './Intro.css'

function Intro() {
	return (
		<section className="intro d-flex flex-column justify-content-around align-items-center">
			<img src={ProfPic} alt="Profile Picture" className="prof-pic" />
			<h3>Hello!</h3>
			<h4>I'm Software Developer from Indonesia.</h4>
			<h4>Currently developing Web & Mobile Applications.</h4>
		</section>
	)
}

export default Intro