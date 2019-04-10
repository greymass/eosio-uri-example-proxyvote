import React, { Component } from 'react';

import { Form } from 'semantic-ui-react';

class DonationAmount extends Component {
  render() {
    const options = [
      {
        key: 'five_eos',
        value: 5,
        text: '5 EOS'
      },
      {
        key: 'ten_eos',
        value: 10,
        text: '10 EOS'
      }
    ];

    return (
      <Form.Dropdown
        defaultValue={5}
        fluid
        label="Donation Amount"
        options={options}
        selection
      />
    );
  }
}

export default DonationAmount;
