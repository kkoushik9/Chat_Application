import React from 'react';
import { makeStyles,createMuiTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import './dashboard.css'
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100ch',
    backgroundColor: 'rgb(22, 22, 22)',
  },
  inline: {
    display: 'inline',
  },
}));


export default function Conversation(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={props.Name} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText style={{color:'white',paddingTop:'0.2em'}}
          primary={props.Name}
          secondary={
            
              
              <i className="text-light">{props.Convo}</i>
            
          }
        />
      </ListItem>
      <Divider variant="inset" component="li"  style={{backgroundColor:'white'}} />
      
      
     
      
    </List>
  );
}