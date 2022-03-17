

interface props {
  title: string;
  isValid: boolean;
  validityMessage: string;
  onClick: (event: React.FormEvent<HTMLInputElement>) => Promise<void>;
}

const FormControl = ({ title, isValid, validityMessage, onClick }: props) => {
    
    return (
      <form>
        <div>
          <p>{title}</p>
          <input type='text' id='test' name='test' />
        </div>
        <input type='submit' value='Submit' onClick={onClick} />
      </form>
    );
  
};

export default FormControl;
