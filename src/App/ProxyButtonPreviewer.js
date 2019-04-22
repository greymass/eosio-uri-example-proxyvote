import React, { Component } from 'react';
import { Button, Segment } from 'semantic-ui-react';
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';

const buttonSizes = ['tiny','small','medium','large'];
const buttonColors = ['blue', 'green', 'yellow'];

class URIPreviewer extends Component {
  state = { buttonSize: 'medium', buttonColor: 'blue' };

  render() {
    const { proxyAccount, eosioURI } = this.props;
    const {
      buttonSize: currentButtonSize,
      buttonColor: currentButtonColor,
      copiedButtonCode,
      copiedHeaderCode
    } = this.state;

    let buttonStyle;

    const eosioToLink = `https://eosio.to/${eosioURI.split('eosio:')[1]}`;
    const addToHeader = "<link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/button.min.css' />";
    const addToMarkdown = `
      <a
        class="${`ui ${currentButtonColor} ${currentButtonSize} button`}"
        href="${eosioToLink}"
        role="button"
        style="margin: 20px;"
      >
        Proxy votes to ${proxyAccount}
      </a>
    `;
    return (
      <Segment basic style={{ margin: 10, padding: 20 }}>
        {buttonSizes.map(buttonSize => {
          if (currentButtonSize === buttonSize) {
            buttonStyle = { marginBottom: 10, border: '1px solid gray' }
          } else {
            buttonStyle = { marginBottom: 10 };
          }
          return(
            <Button
              basic
              content={buttonSize}
              key={`${buttonSize}-size-button`}
              onClick={() => this.setState({ buttonSize })}
              style={buttonStyle}
            />
          )
        })}
        <br />
        {buttonColors.map(buttonColor => {
          if (currentButtonColor === buttonColor) {
            buttonStyle = { marginBottom: 10, border: `1px solid ${buttonColor}` }
          } else {
            buttonStyle = { marginBottom: 10 };
          }
          return(
            <Button
              basic
              color={buttonColor}
              content={buttonColor}
              key={`${buttonColor}-color-button`}
              onClick={() => this.setState({ buttonColor })}
              style={buttonStyle}
            />
          )
        })}
        <h3 style={{ marginTop: 30 }}>
          The button will look like this:
        </h3>
        <Button
          color={currentButtonColor}
          content={`Proxy your Votes to ${proxyAccount}`}
          key="example-button"
          size={currentButtonSize}
          style={{ margin: 20 }}
        />
        <hr key="hr" />
        <h3 key="headerHeader">
          To add this button to your website, add the following line to your page header:
        </h3>
        <Segment>
          <textarea
            defaultValue={addToHeader}
            id="addToHeaderField"
            key="textareaHeader"
            style={{ position: 'absolute', bottom: 10000 }}
          />
          <Button
            floated="right"
            color={copiedHeaderCode ? "grey" : "blue"}
            content={copiedHeaderCode ? "Copied" : "Copy"}
            key="copyHeaderButton"
            onClick={() => {
              this.setState({ copiedHeaderCode: true });
              document.getElementById("addToHeaderField").select();
              document.execCommand("copy");
              setTimeout(() => this.setState({ copiedHeaderCode: false }), 3000)
            }}
            size="mini"
            style={{ marginTop: -3 }}
          />
          {addToHeader}
        </Segment>
        <h3 key="headerBody">
          And add this HTML snippet in the part of your markdown where you wish the button to appear:
        </h3>
        <Segment>
          <textarea
            defaultValue={addToMarkdown}
            key="textAreaBody"
            id="addToMarkdownField"
            style={{ position: 'absolute', bottom: 10000 }}
          />
          <Button
            color={copiedButtonCode ? "grey" : "blue"}
            content={copiedButtonCode ? "Copied" : "Copy"}
            floated="right"
            key="copyBodyButton"
            onClick={() => {
              this.setState({ copiedButtonCode: true });
              document.getElementById("addToMarkdownField").select();
              document.execCommand("copy");
              setTimeout(() => this.setState({ copiedButtonCode: false }), 3000)
            }}
            size="mini"
            style={{ margin: -3 }}
          />
          <Editor
            disabled
            highlight={code => highlight(code, languages.js)}
            key="editor"
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
              width: 500,
              marginLeft: 120
            }}
            value={addToMarkdown}
          />
        </Segment>
      </Segment>
    );
  }
}

export default URIPreviewer;
