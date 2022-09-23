import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import { defaultProviders } from "@connect2ic/core/providers"
import { createClient } from "@connect2ic/core"
import { Connect2ICProvider } from "@connect2ic/react"
import "@connect2ic/core/style.css"
import * as backend from "../../../.dfx/local/canisters/backend"

const client = createClient({
  canisters: {
    backend,
  },
  providers: defaultProviders,
})


ReactDOM.render(  
    <Connect2ICProvider client={client}>
        <App />
    </Connect2ICProvider>, 
    document.getElementById('root'));