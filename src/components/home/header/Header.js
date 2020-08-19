import React from 'react';
import './Header.css'

function Header() {
	return (
		<header className="d-flex flex-column justify-content-around align-items-center">
			<div className="bg-circle">
				<h1>Michael Susanto</h1>
				<h3>Web Developer</h3>
			</div>		
		</header>
	)
}

export default Header