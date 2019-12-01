import React from 'react';

const Footer = ({value, functionIncrease, functionDecrease}) => {
	return(
		<div>
			<hr/>
			<h1>This is Footer {value}</h1>
			<button onClick={functionIncrease}>Increase Me</button>
			<button onClick={functionDecrease}>Decrease Me</button>
			<hr/>
		</div>
	)
}

export default Footer;