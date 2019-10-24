import React from 'react';
import { billCalc, billInput } from '../Data/Data'

class CalcDisplay extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            billDays: 0
        }
    }
    render(){
        return (
            <p>I wish I could show you {billCalc.billDays}</p>
        )
    }
}
export default CalcDisplay;