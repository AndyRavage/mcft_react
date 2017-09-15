import React, { Component } from 'react';
import {
    Route,
    Switch
  } from 'react-router-dom';
import ClientList from './ClientList';
import ClientRecord from './ClientRecord';
import ClientAdd from './ClientAdd';

class Client extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/clients" component={ClientList}/>
                    <Route exact path="/clients/add" component={ClientAdd}/>  
                    <Route path="/clients/:id" component={ClientRecord}/>            
                </Switch>
            </div>
        );
    }
}

export default Client;