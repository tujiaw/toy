import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const list = [{
  title: '我姓黄，红绿灯的黄。...',
  ct: '2018-09-27 13:30:06.616',
  text: '我姓黄，红绿灯的黄。\r\n我姓钱，人民币的钱。\r\n我姓王，大老虎的王。\r\n我姓牛，刘奶奶那个牛。\r\n我姓周，一个星期的周。\r\n我姓白，赤橙黄绿青蓝紫的白。\r\n我姓林，什么鸟都有的那个林。\r\n我姓蓝，挖掘机技术哪家强的蓝。'
},
{
  title: '我姓黄，红绿灯的黄。...',
  ct: '2018-09-27 13:30:06.616',
  text: '我姓黄，红绿灯的黄。\r\n我姓钱，人民币的钱。\r\n我姓王，大老虎的王。\r\n我姓牛，刘奶奶那个牛。\r\n我姓周，一个星期的周。\r\n我姓白，赤橙黄绿青蓝紫的白。\r\n我姓林，什么鸟都有的那个林。\r\n我姓蓝，挖掘机技术哪家强的蓝。'
}
]
function TextJoke(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <List>
        {list.map((data, i) => {
          return (
            <ListItem key={i}>
              <ListItemText
                primary={data.ct}
                secondary={data.text}
              />
            </ListItem>
          )
        })}
      </List>
    </div>
  );
}

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  item: {
    width: '100%'
  },
  title: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between'
  }
});

TextJoke.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextJoke);