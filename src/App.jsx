import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import Form from './App/Form';

class App extends Component {
  onStateChange = (state) => {
    this.setState({ ...this.state, ...state });
  };
  render() {
    const { eosioURI } = this.state;
    return (
        <Grid stackable centered>
          <Form onStateChange={this.onStateChange} />
          <URIPreviewer eosioURI={eosioURI} />
          <DonationButtonPreviewer eosioURI={eosioURI} />

          <div style={{ position: 'absolute', bottom: 15 }}>
            Powered By Greymass
          </div>
        </Grid>
    );
  }
}

export default App;
