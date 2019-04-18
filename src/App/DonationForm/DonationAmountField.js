import React, { Component } from 'react';

import { Form } from 'semantic-ui-react';

const decimalRegex = /^(\d*\.)?\d+$/;

class DonationAmountField extends Component {
  onChange = (e) => {
    const donationAmount = e.target.value;

    if (decimalRegex.test(donationAmount)) {
      this.props.onStateChange({ donationAmount })
    } else {
      this.props.onStateChange({
        error: 'The donation amount, must be a decimal number with, eg: "1.0000"'
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Form.Input
          label="Enter a Donation Amount (in EOS)"
          onChange={this.onChange}
        />
      </React.Fragment>
    );
  }
}

export default DonationAmountField;
