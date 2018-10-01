import React, { Component, Fragment } from 'react'
import SetString from './Components/SetString/'
import ReadString from './Components/ReadString/'

import Counter from './Components/Counter'

class App extends Component {
  state = {
    loading: true,
    drizzleState: null
  }

  componentDidMount() {
    const { drizzle } = this.props

    // subscribe to changes in the store
    this.unsubscribe = drizzle.store.subscribe(() => {

      // every time the store updates, grab the state from drizzle
      const drizzleState = drizzle.store.getState()

      // check to see if it's ready, if so, update local component state
      if (drizzleState.drizzleStatus.initialized) {
        this.setState({
          drizzleState,
          loading: false
        })
      }
    })
  }

  compomentWillUnmount() {
    this.unsubscribe()
  }

  render() {
    if (this.state.loading) return "Loading Drizzle..."
    return (
      <Fragment>
        <Counter
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <ReadString
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
        <SetString
          drizzle={this.props.drizzle}
          drizzleState={this.state.drizzleState}
        />
      </Fragment>
    )
  }
}


export default App