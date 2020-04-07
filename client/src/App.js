import React from "react";
import Home from "./Components/HomeComponent";
import Header from "./Components/HeaderComponent";
import "./App.css";

function App() {
  const auth = {
    isAuthenticated: false,
    user: null,
    token: null,
  };

  const error = {
    id: null,
    msg: null,
  };
  return (
    <div className="App">
      <Header auth={auth} error={error} />
      <Home />
    </div>
  );
}

export default App;
