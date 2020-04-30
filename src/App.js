import React, { Component} from 'react';
import './App.module.css';
import fetchData from './Api/fetchData'
import {Cards,Charts,CountryPicker} from './Components/index'; 
import styles from './App.module.css';
class App extends Component {
  state={
    data:{},
    country:''
  }

  async componentDidMount(){
    console.log('called');
      const fetchedData= await fetchData();
      if(fetchedData)
        this.setState({data:fetchedData});
      else
        this.setState({data:{error:'Failed to fetch data'}})
  }
  onCountryChangeHandler= async (country)=>{
   if(country==='global'){
    const fetchedData= await fetchData()
     this.setState({data:fetchedData,country:''})
     return;
   }
   const fetchedData= await(fetchData(country))
   this.setState({data:fetchedData,country:country})
}
render()
  {
    console.log('render');
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
