import React from 'react';

class Header extends React.Component{

	constructor(props){
		super(props);
		console.log('this is Header constructor');

		this.state = {counter: 100, username: 'Amit', password: 'admin'}
	}

	componentDidMount(){
		console.log('this is Header componentDidMount method ');
	}

	
	componentDidUpdate(){
		console.log('this is Header compoentDidUpdate method ');
	}

	increaseCounter = () => {
		const temp = this.state.counter;
		this.setState({counter: (temp + 1)});
	}

	decreseCounter = () => {
		const temp = this.state.counter;
		this.setState({counter: (temp  - 1)});
	}

	render(){
		console.log('this is Header render method');
		return(
			<div>
				<hr/>
				<h1>This is Header {this.props.message}</h1>

				<h1>{this.state.counter}</h1>
				<button onClick={this.increaseCounter}>Increase Me</button>
				<button onClick={this.decreseCounter}>Decrease Me</button>
				<hr/>
			</div>
		)
	}
}

export default Header;