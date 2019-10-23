import React from 'react';
import FormSection from '../formSection/formSection';
import './formContainer.css';
import reqFields from '../Requirements/Requirements';
import FormInput from '../formInput/formInput';
import FormSelect from '../formSelect/formSelect';


class FormContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            billTotal: '',
            openingBalance: '',
            closingBalance: '',
            retailer: "",
            peakUsage: '',
            peakRate: '',
            usageCharges: '',

        }
        this.handleChange = this.handleChange.bind(this);
        this.calcFields = this.calcFields.bind(this);
        
    }
    calcFields(){
        let billTotal = this.state.closingBalance - this.state.openingBalance
        let usageCharges = this.state.peakUsage * this.state.peakRate /100
        this.setState( { billTotal: billTotal } )
        this.setState( { usageCharges: usageCharges} )
    }
    handleChange = async (e) => {
        const value = e.target.value
        const name = e.target.name
        this.setState({ [name]: value } )
        
    }

    render(){
        return (
            <div className="FormContainer" >
                <div className="InputFields">
                    <h1>{this.props.formTitle}</h1>
                    {reqFields.map(field => {
                        if (field.type === "number") {
                            return <FormInput name={field.name} alias={field.alias} type={field.type} onChange={this.handleChange} Calc={this.calcFields} />
                        } else if (field.type === "dropdown") {
                            return <FormSelect name={field.name} alias={field.alias} options={field.options} onChange={this.handleChange} />
                        }

                    })}
                </div>
                <div className="CalcFields">
                    <h2>Calculated Fields</h2>
                    <p>Calc Bill Total</p>
                    <p>{this.state.billTotal}</p>
                    <p>Usage Charges</p>
                    <p>{this.state.usageCharges}</p>
                    <input className="Button" type="button" onClick={this.calcFields} value="Calc now"></input>
                </div>
                <div>
                    
                    
                </div>
            </div>
            
            
        )
    }
}

export default FormContainer;