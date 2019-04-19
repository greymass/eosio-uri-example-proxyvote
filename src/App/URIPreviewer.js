import React, { Component } from 'react';
import {Button, Segment} from 'semantic-ui-react';

class URIPreviewer extends Component {
  render() {
    const { eosioURI, copiedURI } = this.props;

    const segmentStyle = {
      margin: 10,
      padding: 20
    };

    return (
      <Segment basic style={segmentStyle}>
        <h4>
          Your eosio uri:
        </h4>
        <a
          style={{ marginBottom: 20 }}
          href={`https://eosio.to/${eosioURI.split('eosio:')}`}
        >
          {eosioURI}
        </a>
        <br />
        <Button
          color={copiedURI ? "grey" : "blue"}
          content={copiedURI ? "HTML copied to clipboard" : "Copy HTML to clipboard"}
          onClick={() => {
            this.setState({ copiedURI: true });
            //copy Content To Clipboard here
            setTimeout(() => this.setState({ copiedURI: true }), 3000)
          }}
          size="mini"
          style={{ margin: 20 }}
        />
      </Segment>
    );
  }
}

export default URIPreviewer;
