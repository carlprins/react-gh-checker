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
    }
]

const section2 = [
    {
        id: 1,
        name: "Period Start Date",
        type: "date",
        options: []

    }, {
        id: 2,
        name: "Period End Date",
        type: "date",
        options: []
    }, {
        id: 3,
        name: "Peak Usage",
        type: "number",
        options: []
    }, {
        id: 4,
        name: "Peak Rate",
        type: "number",
        options: []
    }
]

class FormContainer extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="FormContainer">
                <h1>{this.props.formTitle}</h1>
                <FormSection sectionName="Basic Information" sectionInputs={section1} />
                <FormSection sectionName="Period Information" sectionInputs={section2} />
            </div>
            
            
        )
    }
}

export default FormContainer;