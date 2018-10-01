import React from 'react'

class Counter extends React.Component {
	state = {
		counterDataKey: null,
		transactionHash: null
	}

	componentDidMount() {
		const { SimpleCounter } = this.props.drizzle.contracts
		const counterDataKey = SimpleCounter.methods[`counter`].cacheCall()

		this.setState(prevState => ({
			...prevState,
			counterDataKey
		}))
	}

	handleClick = e => {
		const { drizzle, drizzleState } = this.props
		const { SimpleCounter } = drizzle.contracts

		const transactionHash = SimpleCounter.methods[e.target.value].cacheSend({
			from: drizzleState.accounts[0]
		})

		this.setState(prevState => ({
			...prevState,
			transactionHash
		}))
	}

	getTransactionStatus = () => {
		const { transactions, transactionStack } = this.props.drizzleState
		const transactionHash = transactionStack[this.state.transactionHash]
		return !transactionHash ? null : `Transaction status: ${transactions[transactionHash].status}`
	}

	render() {
		const { SimpleCounter } = this.props.drizzleState.contracts
		const counter = SimpleCounter.counter[this.state.counterDataKey]
		return (
			<React.Fragment>
				<p>Counter: {counter && counter.value}</p>

				<button value="increment" onClick={this.handleClick}>
					increment
				</button>
				<button value="decrement" onClick={this.handleClick}>
					decrement
				</button>

				<div>{this.getTransactionStatus()}</div>
			</React.Fragment>
		)
	}
}

export default Counter