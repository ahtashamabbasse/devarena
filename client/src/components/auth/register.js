import React, {Component} from 'react';
import classnames from 'classnames'
import {connect} from "react-redux";
import {registerUser} from "../../actions/authAction";
import PropsTypes from "prop-types"
import TextField from "../common/TextFieldComponent";


const {withRouter} = require("react-router-dom");

class Register extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        cpassword: "",
        errors: {}
    };
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    };
    onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            cpassword: this.state.cpassword,
        };

        this.props.registeruser(newUser,this.props.history)

    };
    componentDidMount() {
        if (this.props.auth.isAuthorized){
            this.props.history.push("/dashboard")
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    render() {
        const {errors} = this.state;
        return (

            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your DevArena account</p>
                            <form onSubmit={this.onSubmit}>



                                <TextField
                                    value={this.state.name}
                                    name={'name'}
                                    type={'text'}
                                    error={errors.name}
                                    onChange={this.onChange}
                                    placeholder={"Enter your name"}
                                />
                                <TextField
                                    value={this.state.email}
                                    name={'email'}
                                    type={'text'}
                                    error={errors.email}
                                    info={'This site uses Gravatar so if you want a profile image, use a Gravatar email'}
                                    onChange={this.onChange}
                                    placeholder={"Email Address"}
                                />

                                <TextField
                                    value={this.state.password}
                                    name={'password'}
                                    type={'password'}
                                    error={errors.password}
                                    onChange={this.onChange}
                                    placeholder={"Enter your password"}
                                />
                                <TextField
                                    value={this.state.cpassword}
                                    name={'cpassword'}
                                    type={'password'}
                                    error={errors.cpassword}
                                    onChange={this.onChange}
                                    placeholder={"Enter your Confirm password"}
                                />
                                <input type="submit" className="btn btn-info btn-block mt-4"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registeruser: PropsTypes.func.isRequired,
    auth: PropsTypes.object.isRequired,
    errors: PropsTypes.object.isRequired,


};
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors

});
export default connect(mapStateToProps, {registeruser: registerUser})(withRouter(Register));