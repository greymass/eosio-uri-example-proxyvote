import React, { Component } from 'react';
import {Button, Segment} from 'semantic-ui-react';

class URIPreviewer extends Component {
  state = {};

  render() {
    const { eosioURI } = this.props;
    const { copiedURI } = this.state;

    const segmentStyle = {
      margin: 10,
      padding: 20
    };

    return (
      <Segment basic style={segmentStyle}>
        <h4 key="header">
          Your eosio uri:
        </h4>
        <a
          href={`https://eosio.to/${eosioURI.split('eosio:')[1]}`}
          key="link"
          style={{ marginBottom: 20 }}
          target="_blank"
        >
          {eosioURI}
        </a>
        <br key="line"/>
        <textarea
          defaultValue={eosioURI}
          id="eosUriField"
          key="eosUriField"
          style={{ position: 'absolute', bottom: 10000 }}
        />
        <Button
          color={copiedURI ? "grey" : "blue"}
          content={copiedURI ? "Copied to clipboard" : "Copy to clipboard"}
          key="copyButton"
          onClick={() => {
            this.setState({ copiedURI: true });
            document.getElementById("eosUriField").select();
            document.execCommand("copy");
            setTimeout(() => this.setState({ copiedURI: false }), 3000)
          }}
          size="mini"
          style={{ margin: 20 }}
        />
      </Segment>
    );
  }
}

export default URIPreviewer;
