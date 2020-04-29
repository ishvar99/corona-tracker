import React, { Component} from 'react';
import './App.module.css';
import axios from 'axios';
import {Cards,Charts,CountryPicker} from './Components/index'; 
import styles from './App.module.css';
class App extends Component {
  state={
    data:{},
    country:null
  }
  fetchData=async (country)=>{
    let url='https://covid19.mathdro.id/api';
    if(country){
      url=`${url}/countries/${country}`
    }
    try {
      const response=await(axios.get(`${url}`));
      const {data:{confirmed,recovered,deaths,lastUpdate}}=response;
       const modifiedData={confirmed,recovered,deaths,lastUpdate}
      return modifiedData;
   
    } catch (error) {
      return null;
    } 
  }
  async componentDidMount(){
      const fetchedData= await(this.fetchData())
      if(fetchedData)
        this.setState({data:fetchedData});
      else
        this.setState({data:{error:'Failed to fetch data'}})
    
  }
  onCountryChangeHandler= async (country)=>{
   console.log('entered')
   if(country==='global'){
    const fetchedData= await(this.fetchData())
     this.setState({data:fetchedData,country:null})
     return;
   }
   const fetchedData= await(this.fetchData(country))
   this.setState({data:fetchedData,country:country})
}
render()
  {
    console.log('render');
    console.log(this.state);
    const {data,country}=this.state;
  return (
    <div className={styles.container}>
     
      <Cards fetchedData={data}/>
      <CountryPicker onCountryChangeHandler={this.onCountryChangeHandler}/>
      <Charts country={country} data={data}/>
    </div>
  );
}
}

export default App;
