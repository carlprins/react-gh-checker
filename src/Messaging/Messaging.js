import React from 'react';
import {screens} from '../Requirements/Requirements';

class Messaging extends React.Component {
    render(){
        return (
            <div className="Messaging">
                <h1>{screens[this.props.question].head}</h1>
                <p>{screens[this.props.question].par}</p>
                
            </div>
        )
    }
}

export default Messaging