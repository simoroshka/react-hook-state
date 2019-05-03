import React from "react";
import { StoreProvider } from "./store/GlobalStore";
import Main from "./scenes/Main";
import "./App.css";

export default function App(props) {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <h2>Using React Hooks to Manage and Organize Application State</h2>
          <Main />
        </header>
      </div>
    </StoreProvider>
  );
}
