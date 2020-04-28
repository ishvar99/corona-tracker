import React, { Component } from 'react';
import './App.module.css';
import axios from 'axios';
import {Cards,Charts,CountryPicker} from './Components/index'; 
import styles from './App.module.css';
class App extends Component {
  state={
    data:{}
  }
  async componentDidMount(){
    try {
      const response=await(axios.get('https://covid19.mathdro.id/api'));
      const {data:{confirmed,recovered,deaths,lastUpdate}}=response;
    const modifiedData={confirmed,recovered,deaths,lastUpdate}
    this.setState({data:modifiedData});
    } catch (error) {
      this.setState({data:{error:'Failed to fetch data'}})
    } 
  }
render()
  {
    const {data}=this.state;
  return (
    <div className={styles.container}>
     
      <Cards fetchedData={data}/>
      <CountryPicker/>
      <Charts/>
    </div>
  );
}
}

export default App;
