import React from 'react';
import Contact from './contact/Contact'
import FB from '../../assets/fb-logo.png';
import Youtube from '../../assets/youtube-logo.png';
import GitHub from '../../assets/github-logo.png';
import LinkedIn from '../../assets/linkedin-logo.png';
import './Footer.css'

function Footer() {
	return (
		<footer className="d-flex flex-column justify-content-around align-items-center">
			<h3>Find me on</h3>	
			<ul className="contacts">
				<Contact url="https://www.facebook.com/michael.s.155" image={FB} alt="Facebook" />
				<Contact url="https://www.youtube.com/channel/UC5325r3vONhMKz9QTXlPm2g" image={Youtube} alt="Youtube" />
				<Contact url="https://gitlab.com/michaelsusanto81" image={GitHub} alt="GitHub" />
				<Contact url="https://id.linkedin.com/in/michaelsusanto81" image={LinkedIn} alt="LinkedIn" />
			</ul>	
			<h5>© 2020 Michael Susanto.</h5>
		</footer>
	)
}

export default Footer