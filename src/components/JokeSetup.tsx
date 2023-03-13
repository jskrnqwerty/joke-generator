import { useContext } from "react";
import { JokeApiContext } from "./context/JokeApiContextProvider";

const JokeSteup = () => {
  const { jokeApiData } = useContext(JokeApiContext);

  return (
    <>
      <p className="joke-line joke-setup">{jokeApiData.setup}</p>
    </>
  );
};

export default JokeSteup;
