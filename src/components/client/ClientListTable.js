import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const styles = theme => ({
  });  
  
class ClientTable extends Component {

    constructor(props) {
        super(props)
    }

    handleClick = (event, id, name) => {
        this.props.history.push('/clients/' + id);
    }    

    render() {
        const classes = this.props.classes;

        return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>Postcode</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Telephone</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.data.map(n => {
                        return (
                            <TableRow key={n.id} hover onClick={event => this.handleClick(event, n.id, n.name)}>
                                <TableCell>{n.name}</TableCell>
                                <TableCell>{n.address}</TableCell>
                                <TableCell>{n.postcode}</TableCell>
                                <TableCell>{n.email}</TableCell>
                                <TableCell>{n.telephone}</TableCell>
                                <TableCell>{n.status}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        );
    }
}

ClientTable.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
  };

export default withStyles(styles)(withRouter(ClientTable));