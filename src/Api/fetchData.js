import axios from 'axios';
const fetchData=async (country)=>{
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

  export default fetchData;