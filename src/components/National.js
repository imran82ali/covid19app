import React,{ useState,useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '20%',
      height: theme.spacing(16),
    },
  },
}));

const useStylesTypography = makeStyles({
  root: {
    width: '20%',
    maxWidth: 500,
  },
});

export default function National() {
  const classes = useStyles();
  const classTypography = useStylesTypography();

  const [globalData,setglobalData] = useState();
  const [dataLoading,setDataLoading]=useState(false);


  useEffect(() => {
    async function fetchGlobalData(){
      
      setDataLoading(true)
      const apiResponse = await fetch('https://corona.lmao.ninja/v2/countries/pakistan?all&strict&query%20');
      const dataFromAPI = await apiResponse.json();
      console.log(dataFromAPI);
      
      setglobalData(dataFromAPI);
      setDataLoading(false)

    }
    fetchGlobalData();

  },[] )

  if(dataLoading) {
    return (
      <div className={classes.root}>
        
        <Paper elevation={3} >
        <div className={classTypography.root}>
          <Typography variant="h6" gutterBottom style={{color:'black'}}>
          Data Loading...
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
          Fatalities
          </Typography>
          </div>
            
        </Paper>
  
      </div>
    );
  }

  return (
    <div className={classes.root}>
    <Paper elevation={3} >
    <Typography variant="h5" gutterBottom style={{color:'red'}}>
        <NumberFormat value={globalData && globalData.todayCases}  displayType={'text'} thousandSeparator={true} />
        </Typography>
        <h3>NewConfirmed</h3>
      </Paper>
      <Paper elevation={3} >
      <Typography variant="h5" gutterBottom style={{color:'brown'}}>
        <NumberFormat value={globalData && globalData.active}  displayType={'text'} thousandSeparator={true} />
        </Typography>
        <h3>Active Cases</h3>
      </Paper>
      <Paper elevation={3} >
      <Typography variant="h5" gutterBottom style={{color:'green'}}>
        <NumberFormat value={globalData && globalData.recovered}  displayType={'text'} thousandSeparator={true} />
        </Typography>
        <h3>Recovered</h3>
      </Paper>
      <Paper elevation={3} >
      <Typography variant="h5" gutterBottom style={{color:'black'}}>
        <NumberFormat value={globalData && globalData.deaths}  displayType={'text'} thousandSeparator={true} />
        </Typography>
        <h3  >Fatalities</h3>
      </Paper>
  </div>
  );
}
