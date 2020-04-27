import React from 'react';
import {Grid,Card,CardContent,Typography} from '@material-ui/core'; 
import styles from './cards.module.css'
const Cards=()=>{
  return (
      <div className="styles.container">
    <Grid container spacing={2}>
      <Grid item component={Card}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>
                Infected
                </Typography> 
                <Typography variant="h5">REAL DATA</Typography>
                <Typography color="textSecondary">REAL DATE</Typography>    
                <Typography variant="body2">Number of active cases of COVID-19</Typography>
        </CardContent>    
      </Grid>
      <Grid item justify='center' component={Card}>
      <CardContent>
            <Typography color="textSecondary" gutterBottom>
                Infected
                </Typography> 
                <Typography variant="h5">REAL DATA</Typography>
                <Typography color="textSecondary">REAL DATE</Typography>    
                <Typography variant="body2">Number of active cases of COVID-19</Typography>
        </CardContent>    
      </Grid>
      <Grid item component={Card}>
      <CardContent>
            <Typography color="textSecondary" gutterBottom>
                Infected
                </Typography> 
                <Typography variant="h5">REAL DATA</Typography>
                <Typography color="textSecondary">REAL DATE</Typography>    
                <Typography variant="body2">Number of active cases of COVID-19</Typography>
        </CardContent>    
      </Grid>
    </Grid>
    </div>
  );
          }

export default Cards;