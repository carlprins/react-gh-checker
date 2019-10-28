import React from 'react';
import './formTable.css';

class FormTable extends React.Component {
    render(){
        return (
            <table>
                <thead>
                    <tr>
                        <th>Usage Type</th>
                        <th>Usage in kWh</th>
                        <th>Cents per kWh</th>
                        <th>GST incl.</th>
                        <th>Calc Field</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Peak1</td>
                        <td>300</td>
                        <td>30.01</td>
                        <td>incl.</td>
                        <td>90.3</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default FormTable;