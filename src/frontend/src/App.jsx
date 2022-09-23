import * as React from 'react';
import logo from "../assets/logo.png";
import { backend } from "../../declarations/backend"
import { ConnectButton, ConnectDialog, Connect2ICProvider, useConnect } from "@connect2ic/react"



const App = () => {
    const [greeting, setGreeting] = React.useState("");
    const [pending, setPending] = React.useState(false);
    const inputRef = React.useRef();

    const { isConnected, principal, activeProvider } = useConnect({
      onConnect: () => {
        // Signed in
      },
      onDisconnect: () => {
        // Signed out
      }
    })

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (pending) return;
        setPending(true);
        const name = inputRef.current.value.toString();

        // Interact with backend actor, calling the greet method
        const greeting = await backend.greet(name);
        setGreeting(greeting);
        setPending(false);
        return false;
    }

    return (
      <main>

      <ConnectButton />
      <ConnectDialog dark={false} />
        <img src={logo} alt="DFINITY logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Enter your name: &nbsp;</label>
          <input id="name" alt="Name" type="text" ref={inputRef} />
          <button id="clickMeBtn" type="submit" disabled={pending}>
            Click Me!
          </button>
        </form>
        <section id="greeting">{greeting}</section>
      </main>
    );
}

export default App;
