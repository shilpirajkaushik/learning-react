import React from 'react';
import App from '../App.css';

const Home=()=>{

	return(<div className="homeStyle">
		<img src={process.env.PUBLIC_URL+"/pic.jpg"}  alt="myPic"/>
		<h1>Welcome Friends</h1>

		</div>);
}
export default Home;