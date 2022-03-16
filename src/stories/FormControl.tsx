import { useContext } from "react";
import MyContext from "./MyContext";

interface props {
  isValid: boolean;
  validityMessage: string;
  onClick: (event: React.FormEvent<HTMLInputElement>) => Promise<void>;
}

const FormControl = ({ isValid, validityMessage, onClick }: props) => {
   
    
    return (
      <form>
        <div>
          <p>Form Control</p>
          <input type='text' id='test' name='test' />
        </div>
        <input type='submit' value='Submit' onClick={onClick} />
        {validityMessage}
      </form>
    );
  
};

export default FormControl;
