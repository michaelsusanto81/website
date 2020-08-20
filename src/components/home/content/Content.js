import React from 'react';
import Intro from './intro/Intro';
import Featured from './featured/Featured';
import Others from './others/Others';

function Content() {
	return (
		<div>
			<Intro />
			<Featured />
			<Others />
		</div>
	)
}

export default Content