import { useContext } from "react";
import { ApiContext } from "./context/ApiContextProvider";

const JokeDisplay = () => {
  const { apiData } = useContext(ApiContext);

  return (
    <>
      <p className="joke-text">{apiData.setup}</p>
      <p className="joke-text">{apiData.punchline}</p>
    </>
  );
};

export default JokeDisplay;
