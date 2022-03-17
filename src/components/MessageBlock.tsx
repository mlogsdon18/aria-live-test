

import { useContext } from 'react';
import { MyContext } from './MyContext';


const MessageBlock = () => {
  const { messages } = useContext(MyContext);
  
  return (
    <div
      role="log"
      aria-live='polite'
      className="alert"
    >
      {messages && Object.entries(messages).map(([key, value]) => {
        return(
          <p key={key}>{value}</p>
        )
      })
      }
    </div>
  );
}

export default MessageBlock;
