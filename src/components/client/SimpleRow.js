import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TableCell from 'material-ui/Table';

const styles = theme => ({
  });  

  
class SimpleRow extends Component {   

    constructor(props) {
        super(props)
        console.log(props);
    }

    handleClick = (event, id, name) => {
        this.props.history.push('/clients/' + id);
    }    

    render() {
        const classes = this.props.classes;

        return (
            this.props.row.map((cell,i) => 
                <TableCell key={i}>{cell}</TableCell>            
            )            
        );
    }
}

SimpleRow.propTypes = {
    row: PropTypes.object.isRequired,
  };

export default withStyles(styles)(withRouter(SimpleRow));