import React, { Component } from 'react';
import './App.css';
import { FormControl } from './stories/FormControl';

interface MyState {
  message1: string;
  message2: string;
}

interface MyProps {

}

class App extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
  

    this.onSubmit.bind(this);
  }

  state: MyState = {
    message1: '',
    message2: 'already an error' 
  }


  onSubmit = (event: React.FormEvent<HTMLInputElement>) => {
   event.preventDefault();
    this.setState({
      message1: 'there is an error'
    });
  }

  render() {
    const { message1, message2 } = this.state;
    return (
      <form>
        <FormControl message={message1} />
        <FormControl message="There was an error" />
        <input type="submit" value="Submit" onClick={this.onSubmit} />
      </form>
    );
  
  }
}

export default App;
