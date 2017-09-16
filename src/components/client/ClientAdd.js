import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Select from 'material-ui/Select';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';

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
    formGroup: {
        marginTop: '30px',
        marginBottom: '30px',
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
    },
    textField: {
        marginLeft: '1%',
        marginRight: '1%',
        width: '98%',
    },
    button: {
        margin: theme.spacing.unit,
    },
  });

class ClientAdd extends Component {
    
        constructor(props) {
            super()        
        }

        state = {
            engineer: '',
            age: '',
          };

        handleChange = name => event => {
            this.setState({ [name]: event.target.value });
          };
    
        render() {        
            const { classes } = this.props;
    
            return (
                <div>
                    <div className={classes.root}>
                        <Grid container spacing={24} justify='center'>                    
                            <Grid item xs={8}>
                                <Typography type="display2" gutterBottom>Add Client</Typography>

                                <form className={classes.container} noValidate autoComplete="off">
                                    <div className={classes.formGroup}>
                                        <Grid item xs={12}>
                                            <Typography type="headline">
                                                Client Details
                                            </Typography>
                                        </Grid>
                                        <TextField
                                            id="name"
                                            label="Client Name"
                                            fullWidth
                                            margin="normal"
                                        />
                                        <Grid item xs={6}>
                                            <TextField
                                                id="address1"
                                                label="Address Line 1"
                                                className={classes.textField}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id="address2"
                                                label="Address Line 2"
                                                className={classes.textField}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id="town"
                                                label="Town/City"
                                                className={classes.textField}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id="postcode"
                                                label="Postcode"
                                                className={classes.textField}
                                                margin="normal"
                                            />
                                        </Grid>
                                    </div>
                                    <div className={classes.formGroup}>
                                        <Grid item xs={12}>
                                            <Typography type="headline">
                                                Main Contact Details
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id="contact_name"
                                                label="Full Name"
                                                className={classes.textField}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id="job_title"
                                                label="Job Title"
                                                className={classes.textField}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id="email"
                                                label="Email Address"
                                                className={classes.textField}
                                                margin="normal"
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id="telephone"
                                                label="Telephone Number"
                                                className={classes.textField}
                                                margin="normal"
                                            />
                                        </Grid>
                                    </div>
                                    <div className={classes.formGroup}>
                                        <Grid item xs={12}>
                                            <Typography type="headline">
                                                Other Details
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                id="engineer"
                                                label="Engineer"
                                                className={classes.textField}
                                                margin="normal"
                                            />
                                        </Grid>
                                    </div>
                                    <Grid container justify="flex-end">
                                        <Button raised color="accent" className={classes.button}>
                                            Create
                                        </Button>
                                    </Grid>
                                </form>
                            </Grid>
                        </Grid>
                    </div>                    
                </div>
            );
        }
    }

ClientAdd.propTypes = {

};

export default withStyles(styles)(ClientAdd);