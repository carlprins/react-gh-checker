import React from 'react';
import FormInput from '../formInput/formInput'
import FormSelect from '../formSelect/formSelect';
import './formSection.css';

class FormSection extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="FormSection">
                <h1>{this.props.sectionName}</h1>
                {this.props.sectionInputs.map(input => {
                    if (input.type === "text") {
                        return <FormInput name={input.name} type={input.type} key={input.id} />
                    } else if (input.type === "dropdown") {
                        return <FormSelect name={input.name} options={input.options} key={input.id} />
                    } else if (input.type === "date") {
                        return <FormInput name={input.name} type={input.type} key={input.id} />
                    } else if (input.type === "number") {
                        return <FormInput name={input.name} type={input.type} key={input.id} />
                    }
                })}
            </div>
        )
    }
}

export default FormSection;

