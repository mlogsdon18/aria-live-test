import { createContext, Dispatch, FC, SetStateAction, useState } from "react";

// this is the equivalent to the createStore method of Redux
// https://redux.js.org/api/createstore

interface MyContextInterface {
  messages: {[key: string]: number};
  announcePolite?: (newMessage: string) => void;
  announceAssertive?: (newMessage: string) => void;
  setId?: Dispatch<SetStateAction<string>>;
  id?: string;
}



export const defaultState = {
  messages: {'': 0},
}

const MyContext = createContext<MyContextInterface>(defaultState);

export const MyProvider: FC = ({ children }) => {
  const [messages] = useState(defaultState.messages);

  console.log('rendering message', message);

  const announcePolite = (newMessage: string, newId?: string) => {
    
    setMessage(newMessage);
  }

  return (
    <MyContext.Provider
      value={{
        message,
        announcePolite,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}


export default MyContext;
