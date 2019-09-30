import React from 'react';

class FormSelect extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            {this.props.name}
            <select value={this.state.value} onChange={this.handleChange}>
              {this.props.options.map(option => <option value={option}>{option}</option>)}
              
            </select>
          </label>
          <h2>{this.state.value}</h2>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default FormSelect;