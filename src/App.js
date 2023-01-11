import React from "react";
import "./App.css";
import Header from "./features/Header";
import Sidebar from "./features/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
    </div>
  );
}

export default App;
