import { createContext, useEffect, useState } from "react";
import { JokeApiData } from "../types";

export const JokeApiContext = createContext({} as ApiContextType);

type JokeApiContextProviderPropsType = {
  children: React.ReactNode;
};

type ApiContextType = {
  jokeApiData: JokeApiData;
  setJokeApiData: React.Dispatch<React.SetStateAction<JokeApiData>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const JokeApiContextProvider = ({
  children,
}: JokeApiContextProviderPropsType) => {
  const [jokeApiData, setJokeApiData] = useState<JokeApiData>(
    {} as JokeApiData
  );
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("useEffect triggered");
    fetch(`https://official-joke-api.appspot.com/random_joke`)
      .then((response) => response.json())
      .then(setJokeApiData);
  }, [count]);

  return (
    <JokeApiContext.Provider
      value={{
        jokeApiData,
        setJokeApiData,
        count,
        setCount,
      }}
    >
      {children}
    </JokeApiContext.Provider>
  );
};

export default JokeApiContextProvider;
