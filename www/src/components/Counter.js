import React, { Component,PropTypes } from 'React'

class Counter extends Component {
	render(){
		const { increment,incrementIfOdd,incrementAsync,decrement,counter } = this.props;
		return (
			<p>
				Clicked: {counter} times
				{''}
				<button onClick={increment}>+</button>
				{''}
				<button onClick={decrement}>-</button>
				{''}
				<button onClick={incrementIFOdd}>+如果偶数</button>
				<button onClick={() => incrementAsync()}>Increment async</button>
			</p>
		)
	}
}

Counter.propTypes = {
	increment: PropTypes.func.isRequired,
	incrementIfOdd: PropTypes.func.isRequired,
	incrementAsync: PropTypes.func.isRequired,
	decrement: PropTypes.number.isRequired
};

export default Counter