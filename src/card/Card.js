import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Card.css'

import Providers from '../provider/Providers'
import Form from '../form/Form'

class Card extends Component {
    render() {
        return (
            <div className="Form-Card">
                <div className="Container">
                    <div className="Form-Card-Header">
                        <p className="Title">Sign In</p>
                        <p>Don't have an account? Register here for free!</p>
                    </div>

                    <Providers/>

                    <Form/>

                </div>
            </div>
        );
    }
}

Card.propTypes = {};
Card.defaultProps = {};

export default Card;
