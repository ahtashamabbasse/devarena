import React, {Component} from 'react';
import classnames from 'classnames'
import {connect} from "react-redux";
import {registerUser} from "../../actions/authAction";
import PropsTypes from "prop-types"

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
                                <div className="form-group">
                                    <input type="text"
                                           className={classnames("form-control form-control-lg ", {'is-invalid': errors.name})}
                                           placeholder="Name"
                                           value={this.state.name}
                                           onChange={this.onChange}
                                           name="name"/>
                                    {errors.name && (<div className={'invalid-feedback'}>{errors.name}</div>)}
                                </div>
                                <div className="form-group">
                                    <input type="email"
                                           className={classnames("form-control form-control-lg ", {'is-invalid': errors.email})}
                                           onChange={this.onChange}
                                           value={this.state.email}
                                           placeholder="Email Address" name="email"/>
                                    {errors.email && (<div className={'invalid-feedback'}>{errors.email}</div>)}
                                    <small className="form-text text-muted">This site uses Gravatar so if you want a
                                        profile image, use a Gravatar email
                                    </small>
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                           className={classnames("form-control form-control-lg ", {'is-invalid': errors.password})}
                                           value={this.state.password}
                                           onChange={this.onChange}
                                           placeholder="Password" name="password"/>
                                    {errors.password && (<div className={'invalid-feedback'}>{errors.password}</div>)}
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                           className={classnames("form-control form-control-lg ", {'is-invalid': errors.cpassword})}
                                           value={this.state.cpassword}
                                           onChange={this.onChange}
                                           placeholder="Confirm Password" name="cpassword"/>
                                    {errors.cpassword && (<div className={'invalid-feedback'}>{errors.cpassword}</div>)}
                                </div>
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