import React, { Component } from 'react';

import { Form } from 'semantic-ui-react';

const addressRegex = /^[a-z12345.]{1,12}$/g;

class RecipientAddressField extends Component {
  onChange = (e) => {
    const donationRecipient = e.target.value;

    if (addressRegex.test(donationRecipient)) {
      this.props.onStateChange({ donationRecipient })
    } else {
      this.props.onStateChange({ error: 'The recipient username is invalid, must be a decimal a string of 1-12 characters.' });
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

export default RecipientAddressField;
