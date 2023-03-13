import "./styles.css";
import JokeButton from "./JokeButton";
import JokeSteup from "./JokeSetup";
import JokePunchline from "./JokePunchline";

const Home = () => {
  return (
    <>
      <div className="joke-card">
        <h1 className="heading-div">Joke Generator</h1>
        <div className="joke-text-button-div">
          <div className="joke-text">
            <JokeSteup />
            <JokePunchline />
          </div>
          <div className="joke-button-div">
            <JokeButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
