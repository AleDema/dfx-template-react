import * as React from 'react';
import { backend } from "../../declarations/backend"
import { useSnapshot } from 'valtio'
import state from "./context/global"

//CONNECT2IC
import * as backend from "~/.dfx/local/canisters/backend"
import { defaultProviders } from "@connect2ic/core/providers"
import { Connect2ICProvider, useConnect, ConnectButton, ConnectDialog } from "@connect2ic/react"
import "@connect2ic/core/style.css"
import { createClient } from "@connect2ic/core"

//ROUTING
import {Link} from "react-router-dom";

import AuthButton from "./components/AuthButton"

const App = () => {
    const snap = useSnapshot(state)
    // const { isConnected, principal, activeProvider } = useConnect({
    //   onConnect: () => {
    //     // Signed in
    //     console.log("connected!")
    //   },
    //   onDisconnect: () => {
    //     // Signed out
    //     console.log("disconnected!")
    //   }
    // })

    return (
      <>
        {/* <ConnectButton />
        <ConnectDialog/> */}
        <a href="/home"/>Home<a/>
        {snap.count}
      </>
    );
}

// const client = createClient({
//   canisters: {
//     backend,
//   },
//   providers: defaultProviders,
// })

export default () => (
// <Connect2ICProvider client={client}>
    <App />
 // </Connect2ICProvider>
)
