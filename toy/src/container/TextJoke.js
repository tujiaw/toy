import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import RootRef from '@material-ui/core/RootRef';

class TextJoke extends React.Component {
  constructor() {
    super();
    this.listRef = React.createRef();
  }

  componentWillReceiveProps() {
    this.listRef.current.scrollTop = 0
  }

  render() {
    const { classes, data } = this.props;
    return (
      <div className={classes.root} ref="list">
        <RootRef rootRef={this.listRef}>
          <List className={classes.list}>
            {data.list && data.list.map((item, i) => {
              return (
                <ListItem key={i}>
                  <ListItemText
                    primary={item.ct}
                    secondary={item.text}
                  />
                </ListItem>
              )
            })}
          </List>
        </RootRef>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  list: {
    maxHeight: 500,
    overflow: 'auto',
  },
});

TextJoke.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextJoke);