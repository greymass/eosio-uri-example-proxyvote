import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

import DonationAmount from './Form/DonationAmount';

class AppForm extends Component {
  render() {
    return (
      <Form style={{ marginTop: 300 }}>
        <DonationAmount />
      </Form>
    );
  }
}

export default AppForm;
