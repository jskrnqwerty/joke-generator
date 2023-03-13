import "./styles.css";
import JokeApiContextProvider from "./context/JokeApiContextProvider";
import JokeButton from "./JokeButton";
import JokeSteup from "./JokeSetup";
import JokePunchline from "./JokePunchline";

const Home = () => {
  return (
    <JokeApiContextProvider>
      <div className="joke-card">
        <h1 className="heading-div">Joke Generator</h1>
        <div className="joke-text">
          <JokeSteup />
          <JokePunchline />
        </div>
        <div className="joke-button-div">
          <JokeButton />
        </div>
      </div>
    </JokeApiContextProvider>
  );
};

export default Home;
