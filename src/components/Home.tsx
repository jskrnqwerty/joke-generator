import "./styles.css";
import JokeApiContextProvider from "./context/ApiContextProvider";
import JokeDisplay from "./JokeDisplay";
import JokeButton from "./JokeButton";

const Home = () => {
  return (
    <JokeApiContextProvider>
      <h1 className="heading">Joke Generator</h1>
      <div className="joke-display">
        <JokeDisplay />
      </div>
      <div className="joke-button">
        <JokeButton />
      </div>
    </JokeApiContextProvider>
  );
};

export default Home;
