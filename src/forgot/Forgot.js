import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

class Forgot extends Component {
    render() {
        return (
            <div>
                <h1>FORGOT SCREEN</h1>
            </div>
        );
    }
}

Forgot.propTypes = {};
Forgot.defaultProps = {};

const mapDispatchToProps = dispatch => bindActionCreators({
    changePage: () => push('/forgot')
}, dispatch)

export default connect(
    null,
    mapDispatchToProps
)(Forgot)
