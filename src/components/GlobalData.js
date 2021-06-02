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
      width: '100%',
      height: theme.spacing(16),
    },
  },
}));

const useStylesTypography = makeStyles({
  root: {
    width: '100%',
    maxWidth: 500,
  },
});

export default function GlobalData() {
  const classes = useStyles();
  const classTypography = useStylesTypography();

  const [globalData,setglobalData] = useState();
  const [dataLoading,setDataLoading]=useState(false);


  useEffect(() => {
    async function fetchGlobalData(){
      
      setDataLoading(true)
      const apiResponse = await fetch('https://api.covid19api.com/summary');
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
          <Typography variant="h6" gutterBottom style={{color:'red'}}>
          Data Loading...
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
          
          New Confirmed
          </Typography>
          </div>            
        </Paper>
        <Paper elevation={3} >
        <div className={classTypography.root}>
          <Typography variant="h6" gutterBottom style={{color:'brown'}}>
          
          Data Loading...
          
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
          Active Cases
          </Typography>
          </div>                     
        </Paper>
        <Paper elevation={3} >
        <div className={classTypography.root}>
          <Typography variant="h6" gutterBottom style={{color:'green'}}>
          Data Loading...
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
          Recovered   
          </Typography>
          </div>                     
            
        </Paper>
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
      <div className={classTypography.root}>
        <Typography variant="h6" gutterBottom style={{color:'red'}}>
        <NumberFormat value={globalData && globalData.Global && globalData.Global.NewConfirmed} displayType={'text'} thousandSeparator={true} />
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
        
        New Confirmed
        </Typography>
        </div>            
      </Paper>
      <Paper elevation={3} >
      <div className={classTypography.root}>
        <Typography variant="h6" gutterBottom style={{color:'brown'}}>
        <NumberFormat value={globalData && globalData.Global && globalData.Global.TotalConfirmed} displayType={'text'} thousandSeparator={true} />
        
        
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
        Active Cases
        </Typography>
        </div>                     
      </Paper>
      <Paper elevation={3} >
      <div className={classTypography.root}>
        <Typography variant="h6" gutterBottom style={{color:'green'}}>
        <NumberFormat value={globalData && globalData.Global && globalData.Global.TotalRecovered}  displayType={'text'} thousandSeparator={true} />
        
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
        Recovered   
        </Typography>
        </div>                     
          
      </Paper>
      <Paper elevation={3} >
      <div className={classTypography.root}>
        <Typography variant="h6" gutterBottom style={{color:'black'}}>
        <NumberFormat value={globalData && globalData.Global && globalData.Global.TotalDeaths}  displayType={'text'} thousandSeparator={true} />
        
        </Typography>
        <Typography variant="subtitle2" gutterBottom>
        Fatalities
        </Typography>
        </div>
          
      </Paper>

    </div>
  );
}
