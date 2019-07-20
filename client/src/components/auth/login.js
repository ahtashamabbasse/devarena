import React, {Component} from 'react';
import {loginuser} from "../../actions/authAction";
import {connect} from "react-redux";
import classnames from 'classnames'

class Login extends Component {

    state = {
        email: "",
        password: "",
        errors: {}
    };
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    };
    onSubmit = (e) => {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        };
        console.log(user);
        this.props.loginUser(user)

    };

    componentDidMount() {
        if (this.props.auth.isAuthorized){
            this.props.history.push("/dashboard")
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {

        if (nextProps.auth.isAuthorized) {
            this.props.history.push("/dashboard")
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    render() {
        const {errors} = this.state
        return (
            <div className="login">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">Sign in to your DevConnector account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="email"
                                           className={classnames("form-control form-control-lg ", {'is-invalid': errors.email})}
                                           value={this.state.email}
                                           onChange={this.onChange}
                                           placeholder="Email Address" name="email"/>
                                    {errors.email && (<div className={'invalid-feedback'}>{errors.email}</div>)}
                                </div>
                                <div className="form-group">
                                    <input type="password"
                                           className={classnames("form-control form-control-lg ", {'is-invalid': errors.password})}
                                           onChange={this.onChange}
                                           value={this.state.password}
                                           placeholder="Password" name="password"/>
                                    {errors.password && (<div className={'invalid-feedback'}>{errors.password}</div>)}
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

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, {loginUser: loginuser})(Login)