import "./components/styles.css";
import Home from "./components/Home";
import JokeApiContextProvider from "./components/context/JokeApiContextProvider";

function App() {
  return (
    <JokeApiContextProvider>
      <div className="app">
        <Home />
      </div>
    </JokeApiContextProvider>
  );
}

export default App;
