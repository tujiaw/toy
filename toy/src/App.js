import React from 'react';
import TopBar from './container/TopBar'
import BottomNav from './container/BottomNav'
import TextJoke from './container/TextJoke'
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios'

class App extends React.Component {
  state = {
    index: 0,
    textjoke: {}
  }

  componentDidMount() {
    this.updateContent(1);
  }

  updateContent = (page) => {
    if (this.isLoading) {
      return
    }

    this.isLoading = true
    if (this.state.index === 0) {
      axios.get('http://robot.ningto.com/getTextJoke?page=' + page)
      .then((response) => {
        this.isLoading = false;
        this.setState({ textjoke: response.data })
      })
      .catch(() => {
        this.isLoading = false;
      })
    }
  }

  onPrev = () => {
    this.updateContent(Math.min(parseInt(this.state.textjoke.page) - 1, 1))
  }

  onNext = () => {
    this.updateContent(parseInt(this.state.textjoke.page) + 1)
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid container className={classes.root} spacing={16} justify="center">
        <Grid item xs={8} className={classes.main}>
          <TopBar onPrev={this.onPrev} onNext={this.onNext} />
          { this.state.index === 0 && <TextJoke data={this.state.textjoke} /> }
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
  main: {
    background:'#eee'
  },
  content: {
  },
}

export default withStyles(styles)(App);