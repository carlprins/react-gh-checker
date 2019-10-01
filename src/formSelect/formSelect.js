import React from 'react';

class FormSelect extends React.Component {
    constructor(props) {
      super(props);
      this.state = { userInput: '' };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
      let value = e.target.value
      this.setState({ userInput: value});
      this.props.onChange(e).then(result => {return});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form>
          <label>
            {this.props.name}
            <select value={this.state.value} onChange={this.handleChange} name={this.props.name}>
              {this.props.options.map(option => <option value={option} key={1}>{option}</option>)}
              
            </select>
          </label>
          <h2>{this.state.userInput}</h2>
          
        </form>
      );
    }
  }

  export default FormSelect;