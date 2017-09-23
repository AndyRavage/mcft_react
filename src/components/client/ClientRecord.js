import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';
import { CircularProgress } from 'material-ui/Progress';
import { withRouter } from 'react-router';
import Divider from 'material-ui/Divider';
import ClientRecordSiteTable from './ClientRecord_SiteTable';
import ClientRecordJobTable from './ClientRecord_JobTable';
import TextField from 'material-ui/TextField';

function TabContainer(props) {
    return <div style={{ padding: 20 }}>{props.children}</div>;
  }

  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };

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
    dividers: {
        margin: '10px 0',
    }
  });

class ClientRecord extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: 0,
        }
    }

    handleChange = (event, value) => {
        this.setState({ value });
      };
    
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
        const { value } = this.state;

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
                    <Grid container spacing={0} justify='center' className={classes.contentGrid}>                    
                        <Grid item xs={8}>                            
                            <Paper className={classes.paper} elevation={4}>
                                <Tabs value={value} onChange={this.handleChange}>
                                    <Tab label="Summary" />
                                    <Tab label="Contacts" />
                                    <Tab label="Jobs" />
                                    <Tab label="Sites" />
                                </Tabs>
                                {value === 0 && 
                                    <TabContainer>
                                        <Grid container spacing={0} justify='left'>
                                            <Grid item xs={4}>  
                                                <Typography type="body2">Address 1</Typography>
                                                <Typography type="body1" gutterBottom>{this.state.clientData.address1 == null ? "\u00a0" : this.state.clientData.address1 }</Typography>
                                                <Divider className={classes.dividers}/>

                                                <Typography type="body2">Address 2</Typography>
                                                <Typography type="body1" gutterBottom>{this.state.clientData.address2 == null ? "\u00a0" : this.state.clientData.address2 }</Typography>
                                                <Divider className={classes.dividers}/>

                                                <Typography type="body2">Town/City</Typography>
                                                <Typography type="body1" gutterBottom>{this.state.clientData.town == null ? "\u00a0" : this.state.clientData.town }</Typography>
                                                <Divider className={classes.dividers}/>

                                                <Typography type="body2">Postcode</Typography>
                                                <Typography type="body1" gutterBottom>{this.state.clientData.postcode == null ? "\u00a0" : this.state.clientData.postcode }</Typography>
                                            </Grid>
                                        </Grid>
                                    </TabContainer>
                                }
                                {value === 1 && 
                                    <TabContainer>
                                    </TabContainer>   
                                }
                                {value === 2 && 
                                    <TabContainer>
                                     <ClientRecordJobTable data = {this.state.clientData.jobs} />
                                    </TabContainer>   
                                }
                                {value === 3 && 
                                    <TabContainer>
                                        <Grid container spacing={0}>
                                            <Grid item xs={4}>
                                                <Button raised color="primary" className={classes.button}>
                                                    Add New
                                                </Button>
                                            </Grid>
                                        </Grid>
                                        <ClientRecordSiteTable data = {this.state.clientData.sites} />
                                    </TabContainer>   
                                }
                            </Paper>
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