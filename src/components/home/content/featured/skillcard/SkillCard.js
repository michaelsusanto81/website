import React from 'react';
import './SkillCard.css'

function SkillCard(props) {
	return (
		<li className="skill">
			<img src={props.image} alt={props.skillname} />
			<h2>{props.skillname}</h2>
		</li>
	)
}

export default SkillCard