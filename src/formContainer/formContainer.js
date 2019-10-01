import React from 'react';
import FormSection from '../formSection/formSection';
import './formContainer.css';
import reqFields from '../Requirements/Requirements';
import FormInput from '../formInput/formInput';


class FormContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            billTotal: 0,
            OpeningBalance: 0,
            ClosingBalance: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.calcFields = this.calcFields.bind(this);
        
    }
    calcFields(){
        let billTotal = this.state.ClosingBalance - this.state.OpeningBalance
        this.setState( { billTotal: billTotal } )
    }
    handleChange = async (e) => {
        const value = e.target.value
        const name = e.target.name
        this.setState({ [name]: value })
        
    }

    render(){
        return (
            <div >
                <div className="FormHeading">
                    <h1>{this.props.formTitle}</h1>
                </div>
                <div className="CalcFields">
                    <h2>Calculated Fields from this form</h2>
                    <p>Opening Balance</p>
                    <p>{this.state.OpeningBalance}</p>
                    <p>Closing Balance</p>
                    <p>{this.state.ClosingBalance}</p>
                    <p>Calc Bill Total</p>
                    <p>{this.state.billTotal}</p>
                    <input className="Button" type="button" onClick={this.calcFields} value="Calc now"></input>
                </div>
                <div className="FormContainer">
                    {reqFields.map(field => <FormInput name={field.name} type={field.type} onChange={this.handleChange} Calc={this.calcFields} />)}
                    
                </div>
            </div>
            
            
        )
    }
}

export default FormContainer;