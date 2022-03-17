

import { useContext } from 'react';
import { AriaAnnouncerContext } from './AriaAnnouncerContext';


const AriaAnnouncer = () => {
  const { messages } = useContext(AriaAnnouncerContext);
  
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

export default AriaAnnouncer;
