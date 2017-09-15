import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const styles = theme => ({
  });  

let id = 0;
function createData(name, address, postcode, email, telephone, status) {
  id += 1;
  return { id, name, address, postcode, email, telephone, status };
}

const data = [
    createData('Pinnacle People', '13 Second Avenue, Acton', 'W3 7RX', 'contact@pinnaclepeople.co.uk', '07748071982', 'Active'),
    createData('Pinnacle People', '13 Second Avenue, Acton', 'W3 7RX', 'contact@pinnaclepeople.co.uk', '07748071982', 'Active'),
    createData('Pinnacle People', '13 Second Avenue, Acton', 'W3 7RX', 'contact@pinnaclepeople.co.uk', '07748071982', 'Active'),
    createData('Pinnacle People', '13 Second Avenue, Acton', 'W3 7RX', 'contact@pinnaclepeople.co.uk', '07748071982', 'Active'),
  ];
  
class SimpleTable extends Component {

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
                    {data.map(n => {
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

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

export default withStyles(styles)(withRouter(SimpleTable));