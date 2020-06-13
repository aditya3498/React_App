import React, { Component } from "react";
import {Router, Switch, Route } from "react-router-dom";

import Counter from './counter';
import Time from './Time';
import history from './history';
import CallApi from './CallAPI';
import Currency from './Currency'

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/home" component={Counter} />
                    <Route path="/time" exact component={Time} />
                    <Route path="/data" exact component={CallApi} />
                    <Route path="/currency" exact component={Currency} />
                </Switch>
            </Router>
        )
    }
}
