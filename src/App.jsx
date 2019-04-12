import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import DonationButtonPreviewer from './App/DonationButtonPreviewer'
import DonationForm from './App/DonationForm';
import URIPreviewer from './App/URIPreviewer';

class App extends Component {
  onStateChange = (state) => {
    this.setState({ ...this.state, ...state });
  };
  render() {
    const { eosioURI } = this.state;

    return (
        <Grid stackable centered>
          <DonationForm onStateChange={this.onStateChange} />
          {eosioURI && (
            <React.Fragment>
              <URIPreviewer eosioURI={eosioURI} />
              <DonationButtonPreviewer eosioURI={eosioURI} />
            </React.Fragment>
          )}


          <div style={{ position: 'absolute', bottom: 15 }}>
            Powered By Greymass
          </div>
        </Grid>
    );
  }
}

export default App;
