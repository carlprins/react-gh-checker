import React from 'react';
import FormSection from '../formSection/formSection';
import './formContainer.css';

const section1 = [
    {
        id: 1,
        name: "Retailer",
        type: "dropdown",
        options: ["Select", "Origin", "AGL", "EnergyAustralia", "Powershop", "Red Energy", "Alinta"]
    }, {
        id: 2,
        name: "Bill Start Date",
        type: "date",
        options: []
    }, {
        id: 3,
        name: "Bill End Date",
        type: "date",
        options: []
    }, {
        id: 4,
        name: "Opening Balance",
        type: "number",
        options: []
    }, {
        id: 5,
        name: "Closing Balance",
        type: "number",
        options: []
    },{
        id: 4,
        name: "Period Start Date",
        type: "date",
        options: []

    }, {
        id: 5,
        name: "Period End Date",
        type: "date",
        options: []
    }, {
        id: 6,
        name: "Peak Usage",
        type: "number",
        options: []
    }, {
        id: 7,
        name: "Peak Rate",
        type: "number",
        options: []
    }
]

const section2 = [
    
]

class FormContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            billTotal: 10,
            OpeningBalance: 0,
            ClosingBalance: 0
        }
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleUpdate(value) {
        this.setState( {billTotal: value})
    }
    render(){
        return (
            <div className="FormContainer">
                <h1>{this.props.formTitle}</h1>
                <p>Bill Total</p>
                <p>{this.state.billTotal}</p>
                <FormSection sectionName="Basic Information" sectionInputs={section1} onChange={this.handleUpdate} />
                
            </div>
            
            
        )
    }
}

export default FormContainer;