import React ,{useEffect,useState} from 'react';
import axios from 'axios'
import {NativeSelect,FormControl} from '@material-ui/core'
import styles from './countrypicker.module.css'
const CountryPicker=({onCountryChangeHandler})=>{
   const [fetchedCountries,setFetchedCountries]=useState([]);
    useEffect(()=>{
        axios.get('https://covid19.mathdro.id/api/countries')
        .then(({data})=>{
            const modifiedData=data.countries.map((item)=>item.name);
            setFetchedCountries(modifiedData)
        })
        .catch((err)=>console.log(err))
    },[])
    return (
           <FormControl className={styles.form}>
               <NativeSelect onChange={(e)=>onCountryChangeHandler(e.target.value)}>
                   <option value='global'>Global</option>
                   {fetchedCountries.map((name,i)=><option key={i} value={name}>{name}</option>)}
                   </NativeSelect>
           </FormControl>
    );
}

export default CountryPicker;