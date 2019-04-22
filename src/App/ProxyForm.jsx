import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';

import ProxyAccountField from './ProxyForm/ProxyAccountField';
import generateURI from '../functions/generateURI';

class ProxyForm extends Component {
  state = {
    proxyAccount: '',
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
    const { proxyAccount } = this.state;

    this.setState({ generatingURI: true });
    const eosioURI = await generateURI(proxyAccount);
    this.props.onStateChange({ eosioURI });
    this.setState({ generatingURI: false });
  };
  render() {
    const { errors, generatingURI } = this.state;
    const hasErrors = !!Object.values(errors).some(value => ![undefined, null].includes(value) );
    return (
      <Form
        error={hasErrors}
        onSubmit={this.onSubmit}
        style={{ marginTop: 300, width: 300, margin: 'auto' }}
      >
        <ProxyAccountField
          setError={this.setError}
          onStateChange={this.stateChange}
        />
        {Object.keys(errors).map(key => (
          <Message
            content={errors[key]}
            error
            key={key}
          />
        ))}
        {proxyAccount !== '' && (
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

export default ProxyForm;
