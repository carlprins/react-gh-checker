import React from 'react';
import './LowerNAV.css';
import {screens} from '../Requirements/Requirements'
import Button from '../FormButton/FormButton';



class LowerNav extends React.Component {
    render(){
        return (
            <div className="LowerNav">
                
                {screens[this.props.screen].buttons.map(button => {
                    return <Button label={button.label} newScreen={button.newScreenState} handleClick={this.props.changeScreen} />
                })}
                
            </div>
        )
    }
}

export default LowerNav