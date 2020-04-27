import React, { Component } from 'react';
import './App.module.css';
import axios from 'axios';
import {Cards,Charts,CountryPicker} from './Components/index'; 

class App extends Component {
render()
  {
  return (
    <div>
      <CountryPicker/>
      <Cards/>
      <Charts/>
    </div>
  );
}
}

export default App;
