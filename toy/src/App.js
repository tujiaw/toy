import React from 'react';
import TopBar from './container/TopBar'
import BottomNav from './container/BottomNav'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

class App extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={16} justify="center">
        <Grid item xs={8}>
          <TopBar />
        </Grid>
        <Grid item xs={8} className={classes.content}>
          <view>1111</view>
        </Grid>
        <Grid item xs={8}>
          <BottomNav />
        </Grid>
      </Grid>
    )
  }
}

const styles = {
  root: {
    flexGrow: 1,
  },
  content: {
  }
}

export default withStyles(styles)(App);