import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import { HtmlViewer } from 'htmlViewer';

const buttonSizes = ['sm', 'md', 'lg', 'xl'];
const buttonColors = ['blue', 'green', 'yellow'];

class URIPreviewer extends Component {
  state = { buttonSize: 'sm', buttonColor: 'blue' };

  render() {
    const { donationAmount, eosioURI } = this.props;
    const { buttonSize: currentButtonSize, buttonColor: currentButtonColor } = this.state;

    return (
      <Segment style={{ margin: 10, padding: 20 }}>
        {buttonSizes.map(buttonSize => {
          return(
            <Button
              onClick={() => this.setState({ buttonSize })}
              content={buttonSize}
            />
          )
        })}
        {buttonColors.map(buttonColor => {
          return(
            <Button
              onClick={() => this.setState({ buttonColor })}
              content={buttonColor}
            />
          )
        })}
        <h3>
          Preview:
        </h3>
        <Button
          color={currentButtonColor}
          content={`Donate ${donationAmount} EOS now`}
          href={eosioURI}
          size={currentButtonSize}
          style={{ margin: 20 }}
        />
        <h3>
          Add this HTML snippet to your site to display the button:
        </h3>
        <HtmlViewer
          html={`
            <link style="cdn.semantic-ui.com/button.min.css" />
            <button
              color="${buttonColor}"
              size="${buttonSize}"
              href="${eosioURI}"
            >
              Donate ${donationAmount} EOS now
            </button>
          `}
        />
      </Segment>
        }
      </Segment>
    );
  }
}

export default URIPreviewer;
