import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Provider from './Provider'

class Providers extends Component {

    async componentDidMount() {
        this.loadSDK()
        this.loadFbAsyncInit()
    }


    loadFbAsyncInit = () => {
        window.fbAsyncInit = () => {
            window.FB.init({
                appId: '170718867069095',
                cooke: true,
                xfbml: true,
                version: 'v2.12'
            })
            this.someoneLogged()
        }
    }

    loadSDK = () => {
        ((d, s, id) => {
            const element = d.getElementsByTagName(s)[0];
            const fjs = element;
            let js = element;
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = `https://connect.facebook.net/es_LA/sdk.js`;
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }


    someoneLogged = () => {
        window.FB.getLoginStatus(function (response) {
            const {status} = response
            if (status === 'connected') return alert("Alguien logueado")
        });
    }

    loginFbCallback = (response) => {
        console.log("callback", response)
    }

    render() {
        return (
            <div>
                <p>Sign in easily with your social account:</p>
                <Provider twitter loginFb={this.loginFbCallback}/>
            </div>
        );
    }
}

export default Providers;
