import { useContext } from "react";
import { JokeApiContext } from "./context/JokeApiContextProvider";

const JokeDisplay = () => {
  const { jokeApiData } = useContext(JokeApiContext);

  return (
    <>
      <p className="joke-text">{jokeApiData.setup}</p>
      <p className="joke-text">{jokeApiData.punchline}</p>
    </>
  );
};

export default JokeDisplay;
