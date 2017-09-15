import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ModeEditIcon from 'material-ui-icons/ModeEdit';

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
    fab_button: {
    margin: theme.spacing.unit,
    position: 'absolute',
    bottom: '30px',
    right: '60px',
    },
  });

class ClientRecord extends Component {

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
                            <Typography type="display2" gutterBottom>Client Name Here</Typography>
                        </Grid>
                    </Grid>
                </div>
                <Button fab color="accent" aria-label="edit" className={classes.fab_button}>
                    <ModeEditIcon />
                </Button>  
            </div>
        );
    }
}

ClientRecord.PropTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(ClientRecord);