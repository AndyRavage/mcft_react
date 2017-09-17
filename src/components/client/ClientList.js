import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import { CircularProgress } from 'material-ui/Progress';

import ClientTable from './ClientListTable';


const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    contentGrid: {
        marginTop: '30px',
    },
    mainHeading: {
        height:'120px',        
        backgroundColor: '#E8EAF6',
        position: 'relative',
    },
    mainHeading_Grid: {
        position: 'relative',
    },
    mainHeading_Text: {
        lineHeight: '120px',
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
    progress: {
        marginTop: '100px'
    },
    fab_button: {
        position: 'absolute',
        bottom: '-28px',
        right: '0',
    },
  });

class ClientList extends Component {
        
    constructor(props) {
        super(props)
        this.state = {}
    }
    
    componentDidMount() {
        fetch('http://localhost:50450/api/clients')
        .then(d => d.json())
        .then(d => {
            this.setState({
                clientData: d
            })
        })
    }
    render() {
        const { classes } = this.props;

        if(!this.state.clientData) return (
            <div>
                <Grid container spacing={0} justify='center' align='center'>
                    <Grid item xs={1}>
                        <CircularProgress className={classes.progress} />
                    </Grid>
                </Grid>
            </div>
        )
        return (
            <div>
                <div className={classes.root}>
                    <div className={classes.mainHeading}>
                        <Grid container spacing={0} justify='center'>                    
                            <Grid item xs={8} className={classes.mainHeading_Grid}>
                                <Typography type="display2" className={classes.mainHeading_Text}>Clients</Typography>
                                <Button fab color="accent" aria-label="add" href='clients/add' className={classes.fab_button}>
                                    <AddIcon />
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <Grid container spacing={24} justify='center' className={classes.contentGrid}>                       
                        <Grid item xs={8}>                            
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
                                <ClientTable data={this.state.clientData}/>
                            </Paper>
                        </Grid>                        
                    </Grid>                   
                </div>                               
            </div>
        );
    }
}

ClientList.PropTypes = {
    classes: PropTypes.object.isRequired
}


export default withStyles(styles)(ClientList);