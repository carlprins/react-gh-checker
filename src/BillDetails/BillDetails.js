import React from 'react';
import './BillDetails.css';
import { billInput, billCalc } from '../Data/Data';
import FormInput from '../formInput/formInput';
import { dateDiff } from '../Calculations/Calculations'
import CalcDisplay from '../CalcDisplay/CalcDisplay';
import PeriodDetails from '../PeriodDetails/PeriodDetails';

const billFields = [
    {
        name: 'billStartDate',
        alias: 'Bill Start Date',
        type: 'date',
    }, {
        name: 'billEndDate',
        alias: 'Bill End Date',
        type: 'date',
    }, {
        name: 'numberOfPeriods',
        alias: 'Number of Periods',
        type: 'number',
    }, {
        name: 'openingBalance',
        alias: 'Opening Balance',
        type: 'number',
    }, {
        name: 'closingBalance',
        alias: 'Closing Balance',
        type: 'number',
    }
]
class BillDetails extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            numberOfPeriods: 1,
            billStartDate: '',
            billEndDate: '',
            billDays: '',
        }
        this.handleDateChange = this.handleDateChange.bind(this);
        this.calcFields = this.calcFields.bind(this);
    }

    handleDateChange = async (e) => {
        const enteredDate = e.target.value
        const name = e.target.name
        this.setState({ [name]: enteredDate } )
        billInput[name] = enteredDate
    }

    calcFields = () => {
        let billDays = dateDiff(this.state.billStartDate,this.state.billEndDate)
        billCalc.billDays = billDays
        this.setState( {billDays: billDays} )
    }

    render(){
        return (
            <div className="BillDetails">
                <p>This is the Bill Details Component</p>
                {billFields.map(field => {
                    return <FormInput alias={field.alias} name={field.name} type={field.type} onChange={this.handleDateChange} Calc={this.calcFields} />
                })}
                <PeriodDetails />
                <CalcDisplay />
            </div>
            
            
        )
    }
}

export default BillDetails