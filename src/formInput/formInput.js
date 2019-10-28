import React from 'react';
import './formInput.css';

class FormInput extends React.Component {
    constructor(props){
        super(props)
        this.state = { userInput: "" }
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    handleUserInput(e) {
        let value = e.target.value
        this.setState({userInput: value});
        this.props.onChange(e).then(resolved => {
            return
        });
    }
    render(){
        return (
            <div className="InputItem">
                <p>{this.props.label}</p>
                <input type={this.props.type} onChange={this.handleUserInput} value={this.state.userInput} name={this.props.name} />
                <h2>{this.state.userInput}</h2>
            </div>
        )
    }
}

export default FormInput;