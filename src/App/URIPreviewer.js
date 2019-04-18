import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class URIPreviewer extends Component {
  render() {
    const { eosioURI } = this.props;

    const segmentStyle = {
      margin: 10,
      padding: 20
    };

    return (
      <Segment basic style={segmentStyle}>
        <h4>
          Your EOSIO URI is {eosioURI}
        </h4>
      </Segment>
    );
  }
}

export default URIPreviewer;
