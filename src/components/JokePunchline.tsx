import { useContext } from "react";
import { JokeApiContext } from "./context/JokeApiContextProvider";

const JokePunchline = () => {
  const { jokeApiData } = useContext(JokeApiContext);

  return (
    <>
      <p className="joke-line joke-punchline">{jokeApiData.punchline}</p>
    </>
  );
};

export default JokePunchline;
