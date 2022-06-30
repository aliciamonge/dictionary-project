import "./App.css";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"> Dictionary - look some word up!</header>
        <main>
          <Dictionary />
        </main>
        <footer className="footer-app">
          Open-sourced{" "}
          <a
            href="https://github.com/aliciamonge/dictionary-project.git"
            target="_blank"
            rel="noreferrer"
          >
            code
          </a>{" "}
          by{" "}
          <a
            href="https://cocky-fermi-cfce54.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Alicia
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
