import React from 'react';
import './formInput.css';

class FormInput extends React.Component {
    constructor(props){
        super(props)
        this.state = { userInput: "" }
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    handleUserInput(e) {
        this.setState({userInput: e.target.value});
    }
    render(){
        return (
            <div className="InputItem">
                <question>{this.props.name}</question>
                <input type={this.props.type} onChange={this.handleUserInput} value={this.state.userInput} />
                <h2>{this.state.userInput}</h2>
            </div>
        )
    }
}

export default FormInput;