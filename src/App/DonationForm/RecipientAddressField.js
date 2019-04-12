import React, { Component } from 'react';

import { Form } from 'semantic-ui-react';

class RecipientAddressField extends Component {
  onChange(e) {
    const donationAmount = e.target.value;

    if (donationAmount.test(/^[0-9A-Za-z!@.,;:'"?-]{1,12}\z/)) {
      this.props.onStateChange({ donationRecipient })
    } else {
      this.props.onStateChange({ error: 'The recipient address is invalid, must be a decimal a string of 1-12 characters.' });
    }
  };
  render() {
    return (
      <React.Fragment>
        <Form.Input
          fluid
          label="Enter a the address of recipient (funds will be received at this address)"
          onChange={this.onChange}
        />
      </React.Fragment>
    );
  }
}

export default RecipientAddressField;
