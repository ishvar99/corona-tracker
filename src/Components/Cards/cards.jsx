import React from 'react';
import {Grid,Card,CardContent,Typography} from '@material-ui/core'; 
import classnames from 'classnames';
import CountUp from 'react-countup';
import styles from './cards.module.css'
const Cards=(props)=>{
  const {fetchedData:{confirmed,recovered,deaths,lastUpdate}}=props;
  if(!confirmed){
    return 'Loading....'
  }
  return (
         <div className="styles.container">
    <Grid container spacing={2} justify="center">
      <Grid item component={Card} xs={12} className={classnames(styles.card,styles.infected)}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
                Infected
                </Typography> 
                <Typography variant="h5"><CountUp end={confirmed.value} duration={2} seperator=","/></Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>    
                <Typography variant="body2">Number of active cases of COVID-19</Typography>
        </CardContent>    
      </Grid>
      <Grid item component={Card} xs={12} className={classnames(styles.card,styles.infected)}>
      <CardContent>
            <Typography color="textSecondary" gutterBottom>
                Recovered
                </Typography> 
                <Typography variant="h5"><CountUp end={recovered.value} duration={2} seperator=","/></Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>    
                <Typography variant="body2">Number of recovered cases of COVID-19</Typography>
        </CardContent>    
      </Grid>
      <Grid item component={Card} xs={12} className={classnames(styles.card,styles.infected)}>
      <CardContent>
            <Typography color="textSecondary" gutterBottom>
                Deaths
                </Typography> 
      <Typography variant="h5"><CountUp end={deaths.value} duration={2} seperator=","/></Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>    
                <Typography variant="body2">Number of death cases of COVID-19</Typography>
        </CardContent>    
      </Grid>
    </Grid>
    </div>
  );
          }

export default Cards;