import { useState } from 'react';
import FormControl from './stories/FormControl';
import MessageBlock from './stories/MessageBlock';
import { MyProvider } from './stories/MyContext';


const App = () => {
  const [isValid, setIsValid] = useState(true);
  const [validityMessage, setValidityMessage] = useState('');

  const validityCheck = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    return new Promise((resolve) => {
      setTimeout(resolve, 500);
    });
  }

  return (
    <MyProvider>
        <MessageBlock />
        <FormControl isValid={isValid} validityMessage={validityMessage} 
        onClick={(event) => validityCheck(event).then(() => { setIsValid(false); setValidityMessage('Invalid'); announceAssertive('Invalid Input')})} />
      </MyProvider>
   
  );
} 


export default App;
