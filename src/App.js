import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import indigo from 'material-ui/colors/indigo';
import pink from 'material-ui/colors/pink';
import red from 'material-ui/colors/red';

import PermanentDrawer from './components/PermanentDrawer';

import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      ...indigo,
      500: '#3F51B5',
    },
    secondary: {
      ...pink,
      400: '#EC407A',
    },
    error: red,
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Router>
            <PermanentDrawer />
          </Router>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
