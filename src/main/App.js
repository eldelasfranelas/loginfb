import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom'

import Card from '../card/Card'
import Forgot from '../forgot/Forgot'
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="Logo">
                <Route exact path="/" component={Card}/>
                <Route exact path="/forgot" component={Forgot}/>
            </div>
        );
    }
}

export default App;
