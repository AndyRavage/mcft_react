import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

import SimpleTable from '../shared/Table';

const styles = theme => ({
    root: {
      flexGrow: 1,
      marginTop: 30,
    },
    paper: theme.mixins.gutters({
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 30
    }),
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    fab_button: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: '30px',
    right: '60px',
    },
  });

class ClientList extends Component {
        
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
                            <Typography type="display2" gutterBottom>Clients</Typography>
                            <form className={classes.container} noValidate autoComplete="off">
                                <TextField
                                    id="placeholder"
                                    label="Search"
                                    fullWidth
                                    margin="normal"
                                    color="secondary"
                                />
                            </form>
                            <Paper className={classes.paper} elevation={4}>
                                <SimpleTable />
                            </Paper>
                        </Grid>                        
                    </Grid>                   
                </div>
                <Button fab color="accent" aria-label="add" href='clients/add' className={classes.fab_button}>
                    <AddIcon />
                </Button>                
            </div>
        );
    }
}

ClientList.PropTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(ClientList);