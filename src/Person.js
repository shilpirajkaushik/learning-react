import React from 'react';



class Person extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		console.log(this.props);
	return (<div>
				<h1>My name is :{this.props.name}</h1>
				<h1>My age is :{this.props.age}</h1>
				<h1>hello my dear friends:</h1>
				<button>Click Me</button>
	
			</div>);
	}
}

export default Person;


