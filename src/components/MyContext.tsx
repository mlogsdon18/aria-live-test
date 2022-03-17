import { createContext, FC, useState } from "react";
import { v4 as uuid } from 'uuid';

interface MessagesModel {
  id: number;
  message: string;
}
interface MyContextInterface {
  messages?: MessagesModel;
  announcePolite?: (newMessage: string) => void;
  announceAssertive?: (newMessage: string) => void;
}

export const MyContext = createContext<MyContextInterface>({});

export const MyProvider: FC = ({ children }) => {
  const [messages, setMessages] = useState({} as MessagesModel);

  /**
   *  Checks if newMessage exists in the messages object
   *  If it does, do nothing. If it doesn't, then generate a unique key and add it to the messages array
   * 
   */ 
  const announcePolite = (newMessage: string) => {
    
    if (Object.values(messages).indexOf(newMessage) === -1) {
      const id = uuid();
     
      setMessages(messages => ({
        ...messages,
        [id]: newMessage
      }));
    } 
    
  }

  /**
   *  Checks if newMessage exists in the messages object
   *  If it does, set the value to an empty string, then wait a bit and add it back
   *  If it doesn't exist, call announcePolite to add it
   */ 
  const announceAssertive = (newMessage: string) => {
    if (Object.values(messages).indexOf(newMessage) > -1) {
        const key = Object.keys(messages).find(key => messages[key as keyof MessagesModel] === newMessage);
        if (key) {
          setMessages(messages => ({
            ...messages,
            [key]: ''
          }));
          setTimeout(() => {
            setMessages(messages => ({
              ...messages,
              [key]: newMessage
            }));
          }, 500)
        }
    } else {
      announcePolite(newMessage);
    }
  }

  return (
    <MyContext.Provider
      value={{
        messages,
        announcePolite,
        announceAssertive,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}


