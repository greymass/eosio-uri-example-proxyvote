import React, { Component } from 'react';
import {Grid, Segment} from 'semantic-ui-react';

import DonationButtonPreviewer from './App/DonationButtonPreviewer'
import DonationForm from './App/DonationForm';
import URIPreviewer from './App/URIPreviewer';

class App extends Component {
  state = {};

  onStateChange = (state) => {
    this.setState({ ...this.state, ...state });
  };
  render() {
    const { donationAmount, eosioURI, generatingButton } = this.state;

    const segmentStyle = {
      margin: 'auto',
      width: 800
    };

   console.log(this.state)
    return (
      <Grid centered>
        <Segment
          aligned="center"
          basic
          style={segmentStyle}
        >
          <Segment basic style={{ marginTop: 200, minHeight: window.innerHeight - 240 }}>
            <DonationForm onStateChange={this.onStateChange} />
            {eosioURI && (
              <Segment>
                <URIPreviewer key='uri_previewer' eosioURI={eosioURI} />
                <a
                  key='generate_button_link'
                  onClick={() => this.setState({ generatingButton: true })}
                  style={{ cursor: 'pointer' }}
                >
                  Generate a button for your website
                </a>
                {generatingButton && (
                  <DonationButtonPreviewer
                    donationAmount={donationAmount}
                    eosioURI={eosioURI}
                    key='button_previewer'
                  />
                )}
              </Segment>
            )}
          </Segment>
          <div style={{ margin:'auto', width: 200} }>
            <h3>Powered By Greymass</h3>
          </div>
        </Segment>
      </Grid>
    );
  }
}

export default App;
