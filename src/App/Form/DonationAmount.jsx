import React, { Component } from 'react';

import { Form } from 'semantic-ui-react';

class DonationAmount extends Component {
  onChange(e) {
    const donationAmount = e.target.value;

    if (donationAmount.test(/^(\d*\.)?\d+$/)) {
      this.props.onStateChange({ donationAmount })
    } else {
      this.props.onStateChange({ error: 'The donation amount, must be a decimal number with, eg: "1.0000"' });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Form.Input
          fluid
          label="Enter a Donation Amount"
          onChange={this.onChange}
        />
      </React.Fragment>
    );
  }
}

export default DonationAmount;
