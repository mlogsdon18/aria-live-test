import { createContext, FC, useState } from "react";
import { v4 as uuid } from 'uuid';

type MessageModel = Record<string, string>;
interface AriaAnnouncerContextInterface {
  messages?: MessageModel;
  announcePolite?: (newMessage: string, id?: string) => void;
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

  /**
   *  If optional id is passed, check if it exists
   *  If it does, do nothing, so that we don't have repetition
   *  If it doesn't, add the message
   *  If no id is passed, generate a unique key and add it to the messages array
   *
   */
  const announcePolite = (newMessage: string, id?: string) => {
    if (id) {
      if (!(id in messages)) {
        addMessage(id, newMessage);
      }
    } else {
      const newId = uuid();
      addMessage(newId, newMessage);
    }
  }

  return (
    <AriaAnnouncerContext.Provider
      value={{
        messages,
        announcePolite,
      }}
    >
      {children}
    </AriaAnnouncerContext.Provider>
  );
}


