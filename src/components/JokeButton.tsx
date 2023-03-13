import { useContext } from "react";
import { JokeApiContext } from "./context/JokeApiContextProvider";

const JokeButton = () => {
  const { count, setCount } = useContext(JokeApiContext);

  return (
    <div>
      <button
        className="joke-button"
        onClick={() => setCount(count + 1)}
      >
        LOL
      </button>
    </div>
  );
};

export default JokeButton;
