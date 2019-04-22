import React, { Component } from 'react';

import { Form } from 'semantic-ui-react';

const addressRegex = /^[a-z12345.]{1,12}$/;

class ProxyAccountField extends Component {
  onChange = (e) => {
    const proxyAccount = e.target.value;

    this.props.setError('proxyAccount', undefined);

    if (addressRegex.test(proxyAccount)) {
      this.props.onStateChange({ proxyAccount })
    } else {
      this.props.setError(
        'proxyAccount',
        'The proxy account name is invalid, it must be a string of 1-12 characters.'
      );
    }
  };
  render() {
    return (
      <React.Fragment>
        <Form.Input
          label="Enter the Account Name of the Proxy"
          onChange={this.onChange}
        />
      </React.Fragment>
    );
  }
}

export default ProxyAccountField;
