import React from 'react';

function Portfolio(props) {
	return (
		<div className="card mx-auto my-4">
			<img src={props.image} className="card-img-top" alt={props.title} />
		  	<div className="card-body">
		    	<h5 className="card-title">{props.title}</h5>
		    	<p className="card-text"><b>Category</b>: {props.category}</p>
		    	<p className="card-text"><b>Description</b>: </p>
		    	<p>{props.description}</p>
		  	</div>
		</div>
	)
}

export default Portfolio