import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Providers.css'

const googleStyle = {
    backgroundColor: "#dd4b39",
    borderColor: "#dd4b39",
    borderRadius: "2px",
}

const twStyle = {
    backgroundColor: "#41abe1",
    borderColor: "#41abe1",
    borderRadius: "2px",
}

const fbStyle = {
    backgroundColor: "#3c5a99",
    borderColor: "#3c5a99",
    borderRadius: "2px",
}


const Provider = props => {
    const {google, fb, twitter} = props

    return (
        <div className="Provider-List">
            {google &&
            <button className="Provider-Item" style={googleStyle}>
                <p className="p"><img src={require("../assets/google.png")} className="img" alt=""/> Google</p>
            </button>}

            {fb &&
            <button className="Provider-Item" style={fbStyle}>
                <p className="p"><img src={require("../assets/facebook.png")} className="img" alt=""/> Sign In With Facebook</p>
            </button>}

            {twitter &&
            <button className="Provider-Item" style={twStyle}>
                <p className="p"><img src={require("../assets/twitter.png")} className="img" alt=""/> Sign In With Twitter</p>
            </button>}
        </div>
    )
}

Provider.propTypes = {
    google: PropTypes.bool,
    fb: PropTypes.bool,
    twitter: PropTypes.bool
};
Provider.defaultProps = {
    google: false,
    fb: true,
    twitter: false
};

export default Provider;
