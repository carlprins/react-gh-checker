import React from 'react';
import BillDetails from '../BillDetails/BillDetails'
import FormSection from '../formSection/formSection';
import './formContainer.css';
import reqFields from '../Requirements/Requirements';
import FormInput from '../formInput/formInput';
import FormSelect from '../formSelect/formSelect';

export const periodData = {
    calcGrossBill: "Hi there",
    value: 100
}

class FormContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = { 
            retailer: "",
            openingBalance: '',
            closingBalance: '',
            calcBillTotal: '',
            period1StartDate: '',
            period1EndDate: '',
            calcPeriod1Days: '',
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
        
    }
    calcFields(){
        let field = this.state
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
            })
        /*this.setState( { calcUsageCharges: usageCharges} )
        this.setState( { calcPeriod1Days: period1Days } )
        this.setState( {calcSupplyCharges: supplyCharges} )*/
    }
    handleChange = async (e) => {
        const value = e.target.value
        const name = e.target.name
        this.setState({ [name]: value } )
        
    }

    render(){
        return (
            <div className="FormContainer" >
                <div>
                    <BillDetails />
                </div>
                <div className="InputFields">
                    <h1>{this.props.formTitle}</h1>
                    {reqFields.map(field => {
                        if (field.type === "number") {
                            return <FormInput name={field.name} alias={field.alias} type={field.type} onChange={this.handleChange} Calc={this.calcFields} />
                        } else if (field.type === "dropdown") {
                            return <FormSelect name={field.name} alias={field.alias} options={field.options} onChange={this.handleChange} />
                        } else if (field.type === "date") {
                            return <FormInput name={field.name} alias={field.alias} type={field.type} onChange={this.handleChange} Calc={this.calcFields} />
                        }

                    })}
                </div>
                <div className="CalcFields">
                    <h2>Calculated Fields</h2>
                    <p>Calculated Bill Total</p>
                    <p>{this.state.calcBillTotal}</p>
                    <p>Period 1 Days</p>
                    <p>{this.state.calcPeriod1Days}</p>
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