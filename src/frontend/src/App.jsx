import * as React from 'react';
import logo from "../assets/logo.png";
import { backend } from "../../declarations/backend"
import { ConnectButton, ConnectDialog, Connect2ICProvider, useConnect } from "@connect2ic/react"



const App = () => {

    const { isConnected, principal, activeProvider } = useConnect({
      onConnect: () => {
        // Signed in
        console.log("connected!")
      },
      onDisconnect: () => {
        // Signed out
        console.log("disconnected!")
      }
    })

    return (
      <main>
        <ConnectButton />
        <ConnectDialog />
      </main>
    );
}

export default App;
