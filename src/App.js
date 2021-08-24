import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1 className="heading">Dictionary </h1>
        </header>
        <main>
          <Dictionary />{" "}
          <a
            href="https://github.com/madzsea/dictionary-react"
            className="link"
            target="_blank"
            rel="noreferrer"
          >
            Open source code
          </a>
        </main>
      </div>
    </div>
  );
}
