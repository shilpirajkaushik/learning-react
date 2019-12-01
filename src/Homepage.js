import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import MainContent from './component/MainContent';

class Homepage extends React.Component{

	constructor(props){
		super(props);
		console.log('this is Header constructor');

		this.state = {counter: 101};
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
		return (
			<div>
				<h1>Welcome to the homepage</h1>
				<Header message="this is header message"/>
				<MainContent/>
				<Footer value={this.state.counter} functionIncrease={this.increaseCounter} functionDecrease={this.decreseCounter}/>
			</div>
		)
	}
}

export default Homepage;