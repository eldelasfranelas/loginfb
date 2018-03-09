import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Provider from './Provider'

class Providers extends Component {
    render() {
        return (
            <div>
                <p>Sign in easily with your social account:</p>
                <Provider twitter />
            </div>
        );
    }
}

export default Providers;
