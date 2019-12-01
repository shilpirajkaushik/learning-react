import React from 'react';

class Welcome extends React.Component{

	constructor(props){
		super(props);
		this.state = {counter: 0, username: 'amit'};
	}

	increase = () => {
		const temp = this.state.counter;
		this.setState({counter: (temp + 1)});
	}

	decrease = () => {
		const temp = this.state.counter;
		this.setState({counter: (temp - 1)});
	}

	render(){
		return(
			<div>
				<hr/>
				<p>Welcome Component:</p>
				<h1>The counter value is {this.state.counter} </h1>
				<h1>{this.props.message}
				</h1>

				<button onClick={this.increase}>Increase</button>
				<button onClick={this.decrease}>Decrease</button>
				<hr/>
			</div>
			)
	}
}

export default Welcome;