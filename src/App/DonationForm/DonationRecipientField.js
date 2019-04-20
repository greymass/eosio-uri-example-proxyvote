import React, { Component } from 'react';

import { Form } from 'semantic-ui-react';

const addressRegex = /^[a-z12345.]{1,12}$/;

class DonationRecipientField extends Component {
  onChange = (e) => {
    const donationRecipient = e.target.value;

    this.props.setError('donationRecipient', undefined);

    if (addressRegex.test(donationRecipient)) {
      this.props.onStateChange({ donationRecipient })
    } else {
      this.props.setError(
        'donationRecipient',
        'The recipient username is invalid, it must be a string of 1-12 characters.'
      );
    }
  };
  render() {
    return (
      <React.Fragment>
        <Form.Input
          label="Enter the Recipient's Username"
          onChange={this.onChange}
        />
      </React.Fragment>
    );
  }
}

export default DonationRecipientField;
