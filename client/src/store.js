import thunk from 'redux-thunk'
import rootReducer from './reducers/'
import drizzleOptions from './drizzleOptions'
import { generateContractsInitialState } from 'drizzle'
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    createStore,
    applyMiddleware
} from 'redux'

const initialState = {
    contracts: generateContractsInitialState(drizzleOptions)
}

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
)

export default store