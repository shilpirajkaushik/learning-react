import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';




class Container extends React.Component{
	render(){
		return(<div>
		
			<App/>
	
			</div>);
	}
}




ReactDOM.render(<Container/>,document.getElementById('root'));



