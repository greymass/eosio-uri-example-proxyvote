import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';

import DonationAmountField from './DonationForm/DonationAmountField';
import RecipientAddressField from './DonationForm/RecipientAddressField';
import generateURI from '../functions/generateURI';

class DonationForm extends Component {
  state = {
    donationAmount: '',
    donationRecipient: ''
  };
  stateChange = (state) => {
    this.setState({ ...this.state, ...state })
  };
  onSubmit = async () => {
    const { donationAmount, donationRecipient } = this.state;

    this.setState({ generatingURI: true });
    const eosioURI = await generateURI(donationAmount, donationRecipient);
    this.props.onStateChange({ donationAmount, eosioURI });
    this.setState({ generatingURI: false });
  };
  render() {
    const { donationAmount, error, generatingURI, donationRecipient } = this.state;
    return (
      <Form
        style={{ marginTop: 300, width: 300, margin: 'auto' }}
        onSubmit={this.onSubmit}
      >
        <DonationAmountField
          onStateChange={this.stateChange}
        />
        {donationAmount !== '' && (
          <RecipientAddressField
            onStateChange={this.stateChange}
          />
        )}
        {error && (
          <Message
            content={error}
            error
          />
        )}
        {donationRecipient !== '' && (
          <Button
            color="blue"
            content="Generate URI"
          />
        )}
        {generatingURI && (
          <h2>Generating URI...</h2>
        )}
      </Form>
    );
  }
}

export default DonationForm;
