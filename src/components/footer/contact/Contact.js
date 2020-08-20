import React from 'react';
import './Contact.css'

function Footer(props) {
	return (
		<li className="contact">
			<a href={props.url} target="_blank" rel="noreferrer">
				<img src={props.image} alt={props.alt} />
			</a>
		</li>
	)
}

export default Footer