import React from 'react';
import App from '../App.css';
import {Link} from 'react-router-dom';

const Menu =()=>{
	return(
		<div className="menuStyle">
		<img src={process.env.PUBLIC_URL+"/logo1.png"} alt="mylogo"/>
	<ul>
			<Link to="/"> <li>Home</li> </Link>
			<Link to="/About"> <li>About</li> </Link>
			<Link to="/Contact"> <li>Contact</li> </Link>
			<Link to="/Help"> <li>Help</li> </Link>
	</ul>
		

		</div>)
}
export default Menu;