import React, { Component } from 'react';
import Header from './Components/Molecules/Header/Header'
import Body from './Components/Templates/Body/Body'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
