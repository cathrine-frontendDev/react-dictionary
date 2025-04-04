import React from "react";
import Dictionary from "./Dictionary"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Dictionary</h1>
      <main>
        <Dictionary/>
      </main>
      <footer className="text-centre">
        This project was coded by Cathrine Kamasho
      </footer>
      </div>
    </div>
  );
}

export default App;
