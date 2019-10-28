import React from 'react';
import {screens} from '../Requirements/Requirements';
import {billInput} from '../Data/Data'
import {reqFields} from '../Requirements/Requirements';
import BillDetails from '../BillDetails/BillDetails'
import Messaging from '../Messaging/Messaging';
import CalcDisplay from '../CalcDisplay/CalcDisplay';
import FormSection from '../formSection/formSection';
import './formContainer.css';

import FormInput from '../formInput/formInput';
import FormSelect from '../formSelect/formSelect';
import FormButton from '../FormButton/FormButton';
import {billCalc} from '../Data/Data';
import LowerNav from '../LowerNAV/LowerNAV';

export const periodData = {
    calcGrossBill: "Hi there",
    value: 100
}


class FormContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            //New format
            screen: 'screen3',
            //Input fields captured
            fuelType: '',
            retailer: '',
            billStartDate: '',
            billEndDate: '',
            openingBalance: '',
            closingBalance: '',
            //All fields below are legacy
            
            
            calcBillTotal: '',
            period1StartDate: '',
            period1EndDate: '',
            // Calcs coming in from the Bill
            calcBillDays: '',
            
            peakUsage: '',
            peakRate: '',
            calcUsageCharges: '',
            dailySupplyCharge: '',
            calcSupplyCharges: '',
            calcGrossBill: '',
            calcControl: '',

        }
        this.handleChange = this.handleChange.bind(this);
        this.calcFields = this.calcFields.bind(this);
        this.changeScreen = this.changeScreen.bind(this);
        
    }
    calcFields(){
        //Bill Days Calculation
        let a = new Date(billInput.billStartDate)
        let b = new Date(billInput.billEndDate)
        let dateDiffDays = (b-a)/(1000 * 60 * 60 * 24) + 1
        billInput.billDays = dateDiffDays
        
        //Control Gross/Net Charges
        billInput.grossControlCharges = billInput.grossClosingBalance - billInput.openingBalance
        billInput.netControlCharges = billInput.netClosingBalance - billInput.openingBalance

        /*let field = this.state
        let billTotal = field.closingBalance - field.openingBalance
        let usageCharges = field.peakUsage * field.peakRate /100
        let a = new Date(field.period1StartDate)
        let b = new Date(field.period1EndDate)
        let period1Days = (b-a)/(1000 * 60 * 60 *24)+1
        let supplyCharges = field.dailySupplyCharge/100 * period1Days
        let grossBill = usageCharges + supplyCharges
        let controlDiff = Math.round((billTotal - grossBill),2)
        
        this.setState( {
            calcBillTotal: billTotal,
            calcUsageCharges: usageCharges,
            calcPeriod1Days: period1Days,
            calcSupplyCharges: supplyCharges,
            calcGrossBill: grossBill,
            calcControl: controlDiff,
            })*/
        
    }
    handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        // Update the "database"
        billInput[name] = value
        this.calcFields()
        //Update the state and trigger re-render
        this.setState({ [name]: value } )
        
    }
    changeScreen = (newScreenState) => {
        this.setState({screen: newScreenState})
        
    }

    render(){
        return (
            <div className="FormContainer" >
                <div className="ScreenContent">
                                        
                    <Messaging question={this.state.screen} />
                    
                    {screens[this.state.screen].questions.map(field => {
                        if (field.type === "dropdown") {
                            return <FormSelect name={field.name} label={field.label} options={field.options} onChange={this.handleChange} />
                        } else if (field.type === "date") {
                            return <FormInput name={field.name} label={field.label} type={field.type} onChange={this.handleChange} />
                        } else if (field.type === "number") {
                            return <FormInput name={field.name} label={field.label} type={field.type} onChange={this.handleChange} />
                        }
                        
                    })}
                    
                    <LowerNav screen={this.state.screen} changeScreen={this.changeScreen} />
                    <p>Fuel type in DB: {billInput.fuelType}</p>
                    <p>Retailer in DB: {billInput.retailer}</p>
                    <p>billStartDate in DB: {billInput.billStartDate}</p>
                    <p>billEndDate in DB: {billInput.billEndDate}</p>
                    <p>There are {billInput.billDays} days in this bill</p>
                    <p>Opening Balance was {billInput.openingBalance}</p>
                    <p>Closing Balance was {billInput.netClosingBalance} and {billInput.grossClosingBalance}</p>
                    <p>Control total net: {billInput.netControlCharges} gross: {billInput.grossControlCharges}</p>
                </div>
                
                <div className="CalcFields">
                    <h2>Calculated Fields</h2>
                    <p>Selected Fuel Type (from State)</p>
                    <p className="Answer">{this.state.fuelType}</p>
                    <p>Selected Retailer (from State)</p>
                    <p className="Answer">{this.state.retailer}</p>
                    <p>Bill Start Date</p>
                    <p className="Answer">{this.state.billStartDate}</p>
                    <p>Bill End Date</p>
                    <p className="Answer">{this.state.billEndDate}</p>
                    
                    <p>Usage Charges</p>
                    <p>{this.state.calcUsageCharges}</p>
                    <p>Supply Charges</p>
                    <p>{this.state.calcSupplyCharges}</p>
                    <p>Gross Bill Total</p>
                    <p>{this.state.calcGrossBill}</p>
                    <p>Control Total</p>
                    <p>{this.state.calcControl}</p>
                </div>
                <div>
                    
                    
                </div>
            </div>
            
            
        )
    }
}

export default FormContainer;