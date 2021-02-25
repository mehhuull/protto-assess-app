import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import Products from "./Products";

function App() {
  // Using the bem naming conventions
  return (
    <div className="app">
      <Header />

      <div className="app__page">
      <Sidebar />
      <Products />
      </div>    

    </div>
  );
}

export default App;
