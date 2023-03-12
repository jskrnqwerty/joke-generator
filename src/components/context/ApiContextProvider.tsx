import { createContext, useEffect, useState } from "react";
import { ApiData } from "../types";

export const ApiContext = createContext({} as ApiContextType);

type ApiContextProviderPropsType = {
  // sd
  children: React.ReactNode;
};

type ApiContextType = {
  apiData: ApiData;
  setJokeApi: React.Dispatch<React.SetStateAction<ApiData>>;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const JokeApiContextProvider = ({ children }: ApiContextProviderPropsType) => {
  const [apiData, setJokeApi] = useState<ApiData>({} as ApiData);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    console.log("useEffect triggered");
    fetch(`https://official-joke-api.appspot.com/random_joke`)
      .then((response) => response.json())
      .then(setJokeApi);
  }, [count]);

  return (
    <ApiContext.Provider
      value={{
        apiData,
        setJokeApi,
        count,
        setCount,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};

export default JokeApiContextProvider;
