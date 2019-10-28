import './FormButton.css';
import React from 'react';

class Button extends React.Component {
    render(){
        return (
            <div className="Button">
                <button onClick={() => this.props.handleClick(`${this.props.newScreen}`)} >{this.props.label} to {this.props.newScreen}</button>
            </div>
        )
    }
}

export default Button;