import { useContext } from "react";
import { ApiContext } from "./context/ApiContextProvider";

const JokeButton = () => {
  const { count, setCount } = useContext(ApiContext);

  return (
    <div>
      <button
        className="button"
        onClick={() => setCount(count + 1)}
      >
        Another joke
      </button>
    </div>
  );
};

export default JokeButton;
