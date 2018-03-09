import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {push} from 'react-router-redux'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {ActionCreators} from '../actions/index'


import './Form.css'
import revelio from '../lib/revelio'

const loading = '../assets/spinner.gif'


const pass_constraints = {
    pass: {
        presence: {
            message: 'Campo requerido'
        },
        length: {
            minimun: 6,
            tooShort: '6 caracteres como minimo'
        }
    }
}


const username_constraints = {
    username: {
        presence: {
            message: 'Campo Requerido *'
        },
        length: {
            minimum: 5,
            message: 'Al menos 5 caracteres'
        },
        format: {
            pattern: "^[A-Za-z-0-9]+$",
            message: "No debe contener espacios en blancos"
        }
    }
}

class Form extends Component {

    constructor() {
        super()
        this.state = {
            username: null,
            pass: null,
            loading: false,
            errors: {
                username: null,
                usernameFlag: false,
                pass: null,
                passFlag: false
            }
        }
    }


    saveInputVal = evt => {
        const {value, id} = evt.target
        this.setState({[id]: value})
    }


    login = () => {
        const {login} = this.props
        console.log("props", this.props)
        const {username, pass} = this.state
        let u = revelio({username: this.state.username}, username_constraints)
        let p = revelio({pass: this.state.pass}, pass_constraints)

        if (u.length || p.length) return alert("Los campos son obligatorios")
        login(username, pass)

        setTimeout(() => {
            // alert("te has logueado con exito")
        }, 5000)

    }

    renderValidationError = (field) => {
        const {errors: {username, usernameFlag, pass, passFlag}} = this.state;
        switch (field) {
            case 'username':
                return usernameFlag ? <p>{username}</p> : null;
            case 'pass':
                return passFlag ? <p>{pass}</p> : null;
        }
    }

    componentWillReceiveProps(props) {
        const {data, error, loading, response} = props;
        if (loading) {
            this.setState({loading})
        }

        if (response) {
            this.setState({loading: false})
            console.log("data", data)
            alert("Logueado con exito")
        }

        if (error) {
            alert("Ha ocurrido un error al iniciar sesion")
        }
    }


    render() {
        return (
            <div>
                <p>Sign in with your regular account</p>
                <hr/>

                <div className="Input-Container">
                    <input
                        type="text"
                        placeholder={"Username"}
                        className="Input-Style"
                        onChange={this.saveInputVal}
                        id="username"
                        onBlur={() => {
                            let val = revelio({username: this.state.username}, username_constraints)
                            console.log("user val", val)
                            this.setState({
                                errors: {
                                    ...this.state.errors,
                                    username: val[0],
                                    usernameFlag: (val.length > 0)
                                }
                            })
                        }}
                    />
                    {this.renderValidationError('username')}
                    <input
                        type="password"
                        placeholder={"Password"}
                        className="Input-Style"
                        onChange={this.saveInputVal}
                        id="pass"
                        onBlur={() => {
                            let val = revelio({pass: this.state.pass}, pass_constraints)
                            this.setState({
                                errors: {
                                    ...this.state.errors,
                                    pass: val[0],
                                    passFlag: (val.length > 0)
                                }
                            })
                        }}
                    />
                    {this.renderValidationError('pass')}
                </div>

                <div className="Remember-Container">
                    <div className="Remember-Inner-Container">
                        <input type="checkbox"/>
                        <p>Remember me</p>
                    </div>
                    <a href="/forgot">
                        Forgot Password ?
                    </a>
                </div>


                <button className="Btn-Login" onClick={() => this.login()}>
                    {this.state.loading ? "Cargando ..." : "LOGIN"}
                </button>
            </div>
        );
    }
}

Form.propTypes = {};
Form.defaultProps = {};


const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch)

const mapStateToProps = state => {
    console.log("states Form", state)
    return {
        loginResult: state.login
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Form)
