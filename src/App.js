import React from "react";
import Dictionary from "./Dictionary"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>English Dictionary</h1>
      <main>
        <Dictionary defaultKeyword="lily"/>
      </main>
      <footer className="text-centre">
        This project was coded by Cathrine Kamasho and is {" "}
        <a href="https://github.com/cathrine-frontendDev/react-dictionary">open-sourced on GitHub.</a>
      </footer>
      </div>
    </div>
  );
}

export default App;
