import React, { Component} from 'react';
import './App.module.css';
import axios from 'axios';
import {Cards,Charts,CountryPicker} from './Components/index'; 
import styles from './App.module.css';
class App extends Component {
  state={
    data:{},
    country:''
  }
  fetchData=async ()=>{
    let url='https://covid19.mathdro.id/api';
    if(this.state.country!==''){
      url=`${url}/countries/${this.state.country}`
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
  async componentDidUpdate(_,prevState){
    if(prevState.country!==this.state.country)
    {
    const fetchedData= await(this.fetchData())
    if(fetchedData)
      this.setState({data:fetchedData});
    else
      this.setState({data:{error:'Failed to fetch data'}})
    }
  }
 onCountryChangeHandler=(country)=>{
   if(country==='global'){
     this.setState({country:''})
     return;
   }
    this.setState({country:country})
}
render()
  {
    const {data}=this.state;
  return (
    <div className={styles.container}>
     
      <Cards fetchedData={data}/>
      <CountryPicker onCountryChangeHandler={this.onCountryChangeHandler}/>
      <Charts country={this.state.country}/>
    </div>
  );
}
}

export default App;
