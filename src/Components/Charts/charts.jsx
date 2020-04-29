import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {Line,Bar} from 'react-chartjs-2';
import styles from './charts.module.css';
const Charts=()=>{
    const [dailyData,setDailyData]=useState([]);
    useEffect(()=>{
        axios.get('https://covid19.mathdro.id/api/daily')
        .then((response)=>{
        const modifiedData= response.data.map((res)=>{
               return {confirmed:res.confirmed.total,deaths:res.deaths.total,reportDate:res.reportDate}
            });
           
            console.log(modifiedData);
            setDailyData(modifiedData);
        }).catch((err)=>console.log(err))
    },[])
    const LineChart=()=>{
        return dailyData.length>0?(
           
            <Line data={{
                labels:dailyData.map(({reportDate})=>reportDate),
                datasets:[
                    {
                        data:dailyData.map(({confirmed})=>confirmed),
                        label:'Infected',
                        borderColor:'#3333fff',
                        fill:true
                    },
                    {
                        data:dailyData.map(({deaths})=>deaths),
                        label:'Deaths',
                        borderColor:'red',
                        backgroundColor:'rgba(255,0,0,0.5)',
                        fill:true
                    }
                ]
            }}/>
        ):null
    }
    return (
        <div className={styles.container}>
            <LineChart/>
        </div>
    );
}

export default Charts;