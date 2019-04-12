import React, { Component } from 'react';
import { Form, Message } from 'semantic-ui-react';

import DonationAmount from './Form/DonationAmount';
import RecipientAddress from './Form/RecipientAddress';

class AppForm extends Component {
  constructor(props) {
    super(props);
    this.setState({
      donationAmount: '',
      recipientAddress: ''
    })
  }
  stateChange = (state) => {
    this.setState({ ...this.state, ...state })
  };
  onSubmit = () => {
    this.setState({ generatingURI: true })
    const eosioURI = '' // generate link here

    this.props.stateChange({ eosioURI })
  };
  render() {
    const { donationAmount, generatingURI } = this.state;

    return (
      <Form
        hasErrors={!!error}
        style={{ marginTop: 300 }}
        onSubmit={this.onSubmit}
      >
        <DonationAmount
          onStateChange={this.stateChange}
        />
        {donationAmount !== '' && (
          <RecipientAddress
            onStateChange={this.stateChange}
          />
        )}
        {error && (
          <Message
            content={error}
            error
          />
        )}
        <Button
          color="blue"
          content="Generate Donation Button"
        />
        {generatingURI && (
          <h2>Generating URI...</h2>
        )}
      </Form>
    );
  }
}

export default AppForm;
