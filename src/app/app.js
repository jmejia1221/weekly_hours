import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

// Components
import Home from '../pages/home/home';
import Report from '../pages/reports/reports';

class App extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/" render={() => <Home data={this.props.data} />} />
                        <Route path="/reports" render={() => <Report data={this.props.data} />} />
                    </Switch>
                        <Link to="/reports">Reports</Link>
                </div>
            </BrowserRouter>
        )
    }
}

export default App;