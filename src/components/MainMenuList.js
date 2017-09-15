// @flow weak

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import HomeIcon from 'material-ui-icons/Home';
import InsertChartIcon from 'material-ui-icons/InsertChart';
import WorkIcon from 'material-ui-icons/Work';
import SupervisorAccount from 'material-ui-icons/SupervisorAccount';
import AttachMoney from 'material-ui-icons/AttachMoney';
import LocalShipping from 'material-ui-icons/LocalShipping';
import { NavLink } from 'react-router-dom';


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper,
  }
});

function MainMenuList(props) {
  const classes = props.classes;
  return (
    <div className={classes.root}>
      <List>

        <NavLink to="/home" style={{ textDecoration: 'none', color: 'unset' }} >
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </NavLink >       

        <ListItem button>
          <ListItemIcon>
            <InsertChartIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <AttachMoney />
          </ListItemIcon>
          <ListItemText primary="Quotes" />
        </ListItem>

        <NavLink to="/jobs" style={{ textDecoration: 'none', color: 'unset' }} >
          <ListItem button>
            <ListItemIcon>
            <WorkIcon />
            </ListItemIcon>
              <ListItemText primary="Jobs" />
            </ListItem>
        </NavLink >

        <NavLink to="/clients" style={{ textDecoration: 'none', color: 'unset' }} >
        <ListItem button>
          <ListItemIcon>
            <SupervisorAccount />
          </ListItemIcon>
          <ListItemText primary="Clients" />
        </ListItem>
        </NavLink>

        <ListItem button>
          <ListItemIcon>
            <LocalShipping />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItem>

      </List>
    </div>
  );
}

MainMenuList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainMenuList);