import React from 'react';
import FormContainer from './formContainer/formContainer';
import Messaging from './Messaging/Messaging';
import periodData from './formContainer/formContainer';
import './App.css';

const messaging = {
  introduction: "Welcome to Handled",
  accountBalance: "What is the balance of your account"
}

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {screen: "introduction"}
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <p>Hello and welcome to Bill Checker</p>
        
        <FormContainer formTitle="Bill Checker" />
        
        
      </header>
    </div>
    )
  }}
export default App;
