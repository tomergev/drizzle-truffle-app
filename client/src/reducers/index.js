import { combineReducers } from 'redux'
/* Reducers */
import { drizzleReducers } from 'drizzle'

export default combineReducers({
    ...drizzleReducers
})