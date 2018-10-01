import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import drizzle from './drizzle'
import options from './drizzleOptions'
import { DrizzleProvider } from 'drizzle-react'
import { LoadingContainer } from 'drizzle-react-components'

ReactDOM.render(
    <DrizzleProvider {...{ options }}>
        <LoadingContainer>
            <App {...{ drizzle }} />
        </LoadingContainer>
    </DrizzleProvider>
    ,
    document.getElementById('root')
)

registerServiceWorker()