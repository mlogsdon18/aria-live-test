import { useContext, useState } from 'react';
import { AriaAnnouncerContext } from './aria-announcer/AriaAnnouncerContext';
import FormControl from './components/FormControl';
import AriaAnnouncer from './aria-announcer/AriaAnnouncer';


const App = () => {
  const [isValid, setIsValid] = useState(true);
  const [validityMessage, setValidityMessage] = useState('');

  const { announcePolite, announceAssertive } = useContext(AriaAnnouncerContext);

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
        <AriaAnnouncer />
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


        <FormControl title="Test same message with different id" isValid={isValid} validityMessage={validityMessage} 
        onClick={(event) => validityCheck(event).then(() => { 
          setIsValid(false); 
          setValidityMessage('Invalid'); 
          if (announcePolite) announcePolite('Invalid Input', '12')})} />

          <FormControl title="Test same message with same id" isValid={isValid} validityMessage={validityMessage} 
        onClick={(event) => validityCheck(event).then(() => { 
          setIsValid(false); 
          setValidityMessage('Invalid'); 
          if (announcePolite) announcePolite('Invalid Input', '12')})} />
      </>
   
  );
} 


export default App;
