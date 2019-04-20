import React, { Component } from 'react';

import { Form } from 'semantic-ui-react';

const decimalRegex = /^(\d*\.)?\d+$/;

class DonationAmountField extends Component {
  onChange = (e) => {
    const donationAmount = e.target.value;
    this.props.setError('donationAmount', undefined);
    if (decimalRegex.test(donationAmount)) {
      this.props.onStateChange({ donationAmount })
    } else {
      this.props.setError(
        'donationAmount',
        'The donation amount is invalid, it must be a decimal number with up to 4 decimals, eg: "1.0000".'
      )
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
