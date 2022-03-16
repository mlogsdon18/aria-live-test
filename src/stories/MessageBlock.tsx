

import React, { useContext, useEffect, useState } from 'react';
import MyContext from './MyContext';


const MessageBlock = () => {
  const { message } = useContext(MyContext);
  
  return (
    <div
      role="log"
      aria-live='polite'
      className="alert"
    >
      {message ? message : ''}
    </div>
  );
}

export default MessageBlock;
