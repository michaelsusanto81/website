import React from 'react';
import ProfPic from '../../../assets/michaelsusanto-profile.png'
import './Content.css'

function Content() {
	return (
		<section className="about-section d-flex flex-column justify-content-around align-items-center">
			<img src={ProfPic} alt="Profile Picture" className="prof-pic" />

			<article className="d-flex flex-column justify-content-around text-justify">
				<h3 className="text-center">Greetings!</h3>
				<p>My name is Michael Susanto, i'm from Faculty of Computer Science, Universitas Indonesia.</p>
				<br/>
				<p>I started my programming career with Visual Basic 6.0 and since entering University, I started to learn about programming and now I develop web and mobile applications.</p>
				<br/>
				<p>Beside of that, I usually play musical instruments for refreshing and play badminton with friends to keep healthy</p>
			</article>
		</section>
	)
}

export default Content