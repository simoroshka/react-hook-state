import React from "react";
import { StoreProvider } from "./store/GlobalStore";
import Main from "./scenes/Main";
import logo from "./logo.svg";
import "./App.css";

export default function App(props) {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <h2>Using React Hooks to Manage and Organize Application State</h2>
          <img src={logo} className="App-logo" alt="logo" />
          <Main />
        </header>
      </div>
    </StoreProvider>
  );
}
