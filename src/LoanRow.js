import React, { Component } from 'react';

class LoanRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {test: 0};
    }

    render() {
        return (
            <tr>
                <td>Loan {this.props.rowCount}</td>
                <td><input type="number" value={this.state.test}/></td>
                <td><input type="number" value={this.state.test}/></td>
                <td><input type="number" value={this.state.test}/></td>
                <button style={{backgroundColor: "red", borderRadius: "20px"}}> - </button >
            </tr>
        );
    }


}
export default LoanRow;