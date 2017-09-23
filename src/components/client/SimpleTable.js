import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import SimpleRow from './SimpleRow';

const styles = theme => ({
  });  

  
class SimpleTable extends Component {   

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
                        {this.props.headers.map((header,i) => 
                            <TableCell key={i}>{header}</TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.data.map((row, j) => 
                        <TableRow key={j} hover onClick={event => this.handleClick(event, j.id, j.name)}>
                            <SimpleRow key={j} data={row}/>
                        </TableRow> 
                    )}
                </TableBody>
            </Table>
        );
    }
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired,
  };

export default withStyles(styles)(withRouter(SimpleTable));