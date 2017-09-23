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
    }

    render() {
        const classes = this.props.classes;

        return (
            <div>
                {this.props.data.map((cell,i) => 
                    <TableCell key={i}>{cell}</TableCell>            
                )}
            </div>           
        );
    }
}

SimpleRow.propTypes = {
    data: PropTypes.object.isRequired,
  };

export default withStyles(styles)(withRouter(SimpleRow));