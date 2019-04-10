import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

import Form from './App/Form';

class App extends Component {
  render() {
    return (
        <Grid stackable centered>
          <Form />

          <div style={{ position: 'absolute', bottom: 5 }}>
            Powered By Greymass
          </div>
        </Grid>
    );
  }
}

export default App;
