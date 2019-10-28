import React from 'react';
import './PeriodDetails.css';
import FormInput from '../formInput/formInput';

const periodFields = [
    {
        name: 'periodStartDate',
        alias: 'Period Start Date',
        type: 'date',
    }, {
        name: 'periodEndDate',
        alias: 'Period End Date',
        type: 'date',
    }, {
        name: 'peakUsage',
        alias: 'Peak Usage',
        type: 'number',
    }, {
        name: 'peakRate',
        alias: 'Peak Rate',
        type: 'number',
    }, {
        name: 'supplyCharge',
        alias: 'Daily Supply Charge',
        type: 'number',
    }
]

class PeriodDetails extends React.Component {
    render(){
        return (
            <div className="PeriodDetails">
                <p>Please enter details from your first bill period</p>
                {periodFields.map(field => {
                    return <FormInput alias={field.alias} name={field.name} type={field.type} onChange={this.handleDateChange} Calc={this.calcFields} />
                })}
                <input></input>
            </div>
            
        )
    }
}

export default PeriodDetails