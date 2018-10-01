import React, { Component } from "react"

class ReadString extends Component {
	state = { dataKey: null }

	componentDidMount() {
		const { MyStringStore } = this.props.drizzle.contracts

		// let drizzle know we want to watch the `myString` method
		const dataKey = MyStringStore.methods["myString"].cacheCall()

		// save the `dataKey` to local component state for later reference
		this.setState({ dataKey })
	}

	render() {
		// get the contract state from drizzleState
		const { MyStringStore } = this.props.drizzleState.contracts
		// console.log(MyStringStore)

		// using the saved `dataKey`, get the variable we're interested in
		const myString = MyStringStore.myString[this.state.dataKey]
		// console.log(myString)

		// if it exists, then we display its value
		return <p>My stored string: {myString && myString.value}</p>
	}
}

export default ReadString