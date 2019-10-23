import React from 'react';
import './BillDetails.css';
import billDate, { billData } from '../Data/Data'
import FormInput from '../formInput/formInput';

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
            billStartDate: '01/02/2019',
            billEndDate: '',
        }
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange = (e) => {
        const enteredDate = e.target.value
        const name = e.target.name
        this.setState({ [name]: enteredDate } )
        billData.billStartDate = enteredDate
    }

    render(){
        return (
            <div className="BillDetails">
                {billFields.map(field => {
                    return <FormInput alias={field.alias} name={field.name} type={field.type} onChange={this.handleDateChange} />
                })}
                <p>from the database {billData.billStartDate} from state:{this.state.billStartDate}</p>
            </div>
            
            
        )
    }
}

export default BillDetails