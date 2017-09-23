import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

const styles = theme => ({
  });  
  
class ClientRecordSiteTable extends Component {

    constructor(props) {
        super(props)
    }

    handleClick = (event, id, name) => {
        this.props.history.push('/sites/' + id);
    }    

    render() {
        const classes = this.props.classes;

        return (
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Equipment Type</TableCell>
                        <TableCell>No of Assets</TableCell>                        
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.data.map(n => {
                        return (
                            <TableRow key={n.id} hover onClick={event => this.handleClick(event, n.id, n.name)}>
                                <TableCell>{n.id}</TableCell>
                                <TableCell>{n.name}</TableCell>
                                <TableCell>{n.equipmentType.description}</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        );
    }
}

ClientRecordSiteTable.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
  };

export default withStyles(styles)(withRouter(ClientRecordSiteTable));