import React from 'react';
import { billCalc, billInput } from '../Data/Data'
import './CalcDisplay.css';

class CalcDisplay extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            billDays: 0
        }
    }
    render(){
        return (
            <div className="CalcDisplay">
                <p>This is the Calc Display Component {billCalc.billDays}</p>
                <p>The number of days in the bill (from DB) is: {billCalc.billDays}</p>
            </div>
            
        )
    }
}
export default CalcDisplay;