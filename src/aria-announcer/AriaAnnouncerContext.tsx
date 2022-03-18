import { createContext, FC, useState } from "react";
import { v4 as uuid } from 'uuid';

type MessageModel = Record<string, string>;
interface AriaAnnouncerContextInterface {
  messages?: MessageModel;
  announcePolite?: (newMessage: string, id?: string) => void;
  announceAssertive?: (newMessage: string) => void;
}

export const AriaAnnouncerContext = createContext<AriaAnnouncerContextInterface>({});

export const AriaAnnouncerProvider: FC = ({ children }) => {
  const [messages, setMessages] = useState<MessageModel>({});


  const addMessage = (id: string, newMessage: string) => {
    setMessages(messages => ({
      ...messages,
      [id]: newMessage
    }));
  }

  const messageExists = (newMessage: string) => {
   return Object.values(messages).indexOf(newMessage);
  }

  /**
   *  Checks if newMessage exists in the messages object
   *  If it does, do nothing. If it doesn't, then generate a unique key and add it to the messages array
   * 
   */ 
  const announcePolite = (newMessage: string, id?: string) => {
    if (id) {
      if (!(id in messages)) {
        addMessage(id, newMessage);
      }
    } else {
      const id = uuid();
      addMessage(id, newMessage);
    }
  }

  /**
   *  Checks if newMessage exists in the messages object
   *  If it does, set the value to an empty string, then wait a bit and add it back
   *  If it doesn't exist, call announcePolite to add it
   */ 
  const announceAssertive = (newMessage: string) => {
    if (messageExists(newMessage) > -1) {
        const key = Object.keys(messages).find(key => messages[key] === newMessage);
        if (key) {
          addMessage(key, '');
          setTimeout(() => {
            addMessage(key, newMessage);
          }, 500)
        }
    } else {
      announcePolite(newMessage);
    }
  }

  return (
    <AriaAnnouncerContext.Provider
      value={{
        messages,
        announcePolite,
        announceAssertive,
      }}
    >
      {children}
    </AriaAnnouncerContext.Provider>
  );
}


