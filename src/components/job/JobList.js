import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

import SimpleTable from '../shared/Table';

const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: 30,
    },
    paper: {
      textAlign: 'center',
      overflowX: 'auto',
      color: theme.palette.text.secondary,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
  });

class JobList extends Component {
        
    constructor(props) {
        super()        
    }   

    render() {
        const { classes } = this.props;
        return (
            <div>
                <div className={classes.root}>
                    <Grid container spacing={24} justify='center'>                    
                        <Grid item xs={8}>
                            <Typography type="display2" gutterBottom>Jobs</Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

JobList.PropTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(JobList);