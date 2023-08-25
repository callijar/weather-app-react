import React from "react";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Mashhad" />

        <footer>
        <div class="coder">
            <a href="https://github.com/callijar/" target="_blank" rel="noopener noreferrer" title="github">
              open-source
            </a>
            {" "} code by {" "}
            <a
              href="https://www.linkedin.com/in/hajar-s-lavasani/"
              target="_blank" rel="noopener noreferrer"
              title="LinkedIn profile"
            >
              Hajar S Lavasani
            </a>
          
        </div>
      </footer>
      </div>
    </div>
  );
}

export default App;
