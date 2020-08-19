import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light" id="nav">
			<div className="navbar-brand">
				<Link to='/' className="text-decoration-none"> 
					<h2>Michael</h2>
				</Link>
			</div>

			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
		        <span className="navbar-toggler-icon"></span>
		    </button>

		    <div className="collapse navbar-collapse" id="collapsibleNavbar">
		        <div className="navbar-nav ml-auto">
		        	<div className="nav-link nav-item">
		        		<Link to='/' className="text-decoration-none">
		        			<h4>Home</h4>
		        		</Link>
		        	</div>
		        	<div className="nav-link nav-item">
		        		<Link to='/portfolio'  className="text-decoration-none">
		        			<h4>Portfolio</h4>
		        		</Link>
		        	</div>
		        	<div className="nav-link nav-item">
		        		<Link to='/about'  className="text-decoration-none">
		        			<h4>About</h4>
		        		</Link>
		        	</div>
		        </div>
	    	</div>			
		</nav>

	)
}

export default Navbar