import React, { Component } from 'react';
import Palette from './Palette';
import SeedColors from './SeedColors';
import './App.css'

class App extends Component{
  render() {
    return (
      <div>
        <Palette {...SeedColors[4]} />
      </div>
    )
  }
}

export default App;