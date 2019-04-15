import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class URIPreviewer extends Component {
  render() {
    const { eosioURI } = this.props;

    return (
      <Segment style={{ margin: 10, padding: 20 }}>
        <h4>
          {eosioURI}
        </h4>
      </Segment>
    );
  }
}

export default URIPreviewer;
