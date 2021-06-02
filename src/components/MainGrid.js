import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import GlobalData from './GlobalData'
import National from './National'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function MainGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
              Global Data as of Today
              <GlobalData />
          </Paper>
        </Grid>

        <Grid item xs={8}>
          <Paper className={classes.paper}>
          <b> Pakistan </b> National Data as of Today
          <National />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
