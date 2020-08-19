import React from 'react';
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
				<li className="contact">
					<a href="https://www.facebook.com/michael.s.155" target="_blank">
						<img src={FB} alt="Facebook" />
					</a>
				</li>
				<li className="contact">
					<a href="https://www.youtube.com/channel/UC5325r3vONhMKz9QTXlPm2g" target="_blank">
						<img src={Youtube} alt="Youtube" />
					</a>
				</li>
				<li className="contact">
					<a href="https://gitlab.com/michaelsusanto81" target="_blank">
						<img src={GitHub} alt="GitHub" />
					</a>
				</li>
				<li className="contact">
					<a href="https://id.linkedin.com/in/michael-susanto-292671193?trk=people-guest_profile-result-card_result-card_full-click" target="_blank">
						<img src={LinkedIn} alt="LinkedIn" />
					</a>
				</li>
			</ul>	
			<h5>© 2020 Michael Susanto.</h5>
		</footer>
	)
}

export default Footer