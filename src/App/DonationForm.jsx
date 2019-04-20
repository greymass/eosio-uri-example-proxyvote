import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';

import DonationAmountField from './DonationForm/DonationAmountField';
import DonationRecipientField from './DonationForm/DonationRecipientField';
import generateURI from '../functions/generateURI';

class DonationForm extends Component {
  state = {
    donationAmount: '',
    donationRecipient: '',
    errors: {}
  };
  stateChange = (state) => {
    this.setState({ ...this.state, ...state })
  };
  setError = (name, error) => {
    const errors = this.state.errors
    errors[name] = error;

    this.setState({ errors })
  };
  onSubmit = async () => {
    const { donationAmount, donationRecipient } = this.state;

    this.setState({ generatingURI: true });
    const eosioURI = await generateURI(donationAmount, donationRecipient);
    this.props.onStateChange({ donationAmount, eosioURI });
    this.setState({ generatingURI: false });
  };
  render() {
    const { donationAmount, errors, generatingURI, donationRecipient } = this.state;
    const hasErrors = !!Object.values(errors).some(value => ![undefined, null].includes(value) );
    return (
      <Form
        error={hasErrors}
        onSubmit={this.onSubmit}
        style={{ marginTop: 300, width: 300, margin: 'auto' }}
      >
        <DonationAmountField
          setError={this.setError}
          onStateChange={this.stateChange}
        />
        {donationAmount !== '' && (
          <DonationRecipientField
            setError={this.setError}
            onStateChange={this.stateChange}
          />
        )}
        {Object.keys(errors).map(key => (
          <Message
            content={errors[key]}
            error
            key={key}
          />
        ))}
        {donationRecipient !== '' && (
          <Button
            color="blue"
            content="Generate URI"
            disabled={hasErrors}
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
