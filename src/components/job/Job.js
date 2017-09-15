import React, { Component } from 'react';
import {
    Route,
    Switch
  } from 'react-router-dom';
  import JobList from './JobList';
  import JobRecord from './JobRecord';

class Job extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/jobs" component={JobList}/>
                    <Route path="/jobs/:id" component={JobRecord}/>            
                </Switch>
            </div>
        );
    }
}

export default Job;