import { useContext, useState } from 'react';
import FormControl from './components/FormControl';
import MessageBlock from './components/MessageBlock';
import { MyContext } from './components/MyContext';


const App = () => {
  const [isValid, setIsValid] = useState(true);
  const [validityMessage, setValidityMessage] = useState('');

  const { announcePolite, announceAssertive } = useContext(MyContext);

  /**
   * Simulate validity AJAX call
   * 
   * @param event 
   * @returns void
   */
  const validityCheck = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    return new Promise((resolve) => {
      setTimeout(resolve, 300);
    })
  }


  return (
    <>
        <MessageBlock />
        <FormControl title="First Test" isValid={isValid} validityMessage={validityMessage} 
        onClick={(event) => validityCheck(event).then(() => { 
          setIsValid(false); 
          setValidityMessage('Invalid'); 
          if (announcePolite) announcePolite('Invalid Input')})} />

        <FormControl title="Test a different message" isValid={isValid} validityMessage={validityMessage} 
        onClick={(event) => validityCheck(event).then(() => { 
          setIsValid(false); 
          setValidityMessage('Invalid'); 
          if (announcePolite) announcePolite('Another invalid input')})} />


        <FormControl title="Test same message with assertive" isValid={isValid} validityMessage={validityMessage} 
        onClick={(event) => validityCheck(event).then(() => { 
          setIsValid(false); 
          setValidityMessage('Invalid'); 
          if (announceAssertive) announceAssertive('Invalid Input')})} />
      </>
   
  );
} 


export default App;
