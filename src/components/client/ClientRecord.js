import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import Paper from 'material-ui/Paper';
import { CircularProgress } from 'material-ui/Progress';
import { withRouter } from 'react-router'

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
    progress: {
        marginTop: '100px'
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        marginTop:'30px',
    },
      fab_button: {
        position: 'absolute',
        bottom: '-28px',
        right: '0',
    },
  });

class ClientRecord extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }
    
    componentDidMount() {
        fetch('http://localhost:50450/api/clients/' + this.props.match.params.id)
        .then(d => d.json())
        .then(d => {
            this.setState({
                clientData: d
            })
        })
    }

    render() {        
        const { classes } = this.props;
        const { match, location, history } = this.props;

        if(!this.state.clientData) return (
            <div>
                <Grid container spacing={24} justify='center' align='center'>
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
                                <Typography type="display2" className={classes.mainHeading_Text}>{this.state.clientData.name}</Typography>
                                <Button fab color="accent" aria-label="add" href='' className={classes.fab_button}>
                                    <ModeEditIcon />
                                </Button>
                            </Grid>
                        </Grid>
                    </div>
                    <Grid container spacing={24} justify='center' className={classes.contentGrid}>                    
                        <Grid item xs={8}>                            
                            <Paper className={classes.paper} elevation={4}></Paper>
                        </Grid>
                    </Grid>
                </div>
                
            </div>
        );
    }
}

ClientRecord.PropTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
}


export default withStyles(styles)(withRouter(ClientRecord));