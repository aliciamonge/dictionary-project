import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
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
          by Alicia
        </footer>
      </div>
    </div>
  );
}

export default App;
