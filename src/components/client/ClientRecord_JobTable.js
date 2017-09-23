import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const styles = theme => ({
  });  
  
class ClientRecordJobTable extends Component {

    constructor(props) {
        super(props)
    }

    handleClick = (event, jobId, name) => {
        this.props.history.push('/jobs/' + jobId);
    }    

    render() {
        const classes = this.props.classes;

        return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Quote Id</TableCell>
                        <TableCell>Engineer</TableCell>
                        <TableCell>Site</TableCell>
                        <TableCell>Job Type</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.data.map(n => {
                        return (
                            <TableRow key={n.id} hover onClick={event => this.handleClick(event, n.jobId, n.name)}>
                                <TableCell>{n.jobId}</TableCell>
                                <TableCell>{n.jobDescription}</TableCell>
                                <TableCell>{n.quoteId}</TableCell>
                                <TableCell>{n.engineerName}</TableCell>
                                <TableCell>{n.siteName}</TableCell>
                                <TableCell>{n.jobType}</TableCell>
                            </TableRow>
                        );
                        
                    })}
                </TableBody>
            </Table>
        );
    }
}

ClientRecordJobTable.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
  };

export default withStyles(styles)(withRouter(ClientRecordJobTable));