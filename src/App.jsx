import React, { Component } from 'react';
import { Grid, Segment, Message } from 'semantic-ui-react';

import ProxyButtonPreviewer from './App/ProxyButtonPreviewer'
import ProxyForm from './App/ProxyForm';
import URIPreviewer from './App/URIPreviewer';

class App extends Component {
  state = {};

  onStateChange = (state) => {
    this.setState({ ...this.state, ...state });
  };
  render() {
    const { proxyAccount, eosioURI, generatingButton } = this.state;

    const segmentStyle = {
      margin: 'auto',
    };

    return (
      <Grid centered>
        <Segment
          aligned="center"
          basic
          style={segmentStyle}
        >
          <Segment basic style={{ marginTop: 100, minHeight: window.innerHeight - 140 }}>
            <Segment basic style={{ width: 400, margin: 'auto' }}>
              <Message
                success
                style={{ marginBottom: 100 }}
                content="
                  This is an EOSIO uri example project created by Greymass to allow any website owner to generate
                  a 'proxy your votes' link and/or button. To start using this tool simply fill up the form below.
                "
              />
              <ProxyForm onStateChange={this.onStateChange} />
            </Segment>
            {eosioURI && (
              <Segment>
                <URIPreviewer key='uri_previewer' eosioURI={eosioURI} />
                {!generatingButton && (
                  <a
                    key='generate_button_link'
                    onClick={() => this.setState({ generatingButton: true })}
                    style={{ cursor: 'pointer' }}
                  >
                    Generate a button for your website
                  </a>
                )}
                {generatingButton && (
                  <React.Fragment>
                    <hr />
                    <ProxyButtonPreviewer
                      proxyAccount={proxyAccount}
                      eosioURI={eosioURI}
                      key='button_previewer'
                    />
                  </React.Fragment>
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
