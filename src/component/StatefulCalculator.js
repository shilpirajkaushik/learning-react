import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


class StatefulCalculator extends React.Component{
	constructor(props){
		super(props);

		this.state = {firstNumber : 0, secondNumber: 0, result: 0};
	}

	handleCalculate = () => {
		var first = this.state.firstNumber;
		var second = this.state.secondNumber;
		var result = parseInt(first) + parseInt(second);
		this.setState({result : result});
	}

	handleFirstNumber = (event) => {
    	this.setState({firstNumber: event.target.value});
 	}

 	handleSecondNumber = (event) => {
    	this.setState({secondNumber: event.target.value});
 	}


	render(){
		return(
			<div>
				<h1>This is StatefulCalculator</h1>
				<TextField id="filled-secondary" label="First Number:" variant="filled" color="secondary" onChange={this.handleFirstNumber}  value={this.state.firstNumber} />

				<br/>
				<TextField id="filled-secondary" label="Second Number:" variant="filled" color="secondary" onChange={this.handleSecondNumber}  value={this.state.secondNumber} />
				<br/>
				<TextField id="filled-secondary" label="Result" variant="filled" color="secondary" onChange={this.handleCalculate}  value={this.state.result} />
				


				<Button variant="contained" color="secondary" onClick={this.handleCalculate}>
				  Calculate
				</Button>
				<CssBaseline />
      <Container fixed>
        <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} />
      </Container>
			</div>
		)
	}
}

export default StatefulCalculator;

