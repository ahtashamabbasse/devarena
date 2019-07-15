import React, {Component} from 'react';
import axios from 'axios'
import classnames from 'classnames'
class Register extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        cpassword: "",
        errors: {}
    };
    onChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })

    };
    onSubmit=(e)=>{
        e.preventDefault();
        const newUser={
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            cpassword: this.state.cpassword,
        };
        console.log(newUser);

        axios.post('api/users/register',newUser)
            .then(res=>console.log(res.data))
            .catch(err=>this.setState({errors:err.response.data}))

    };

    render() {
        const {errors}=this.state
        return (

            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your DevArena account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className={classnames("form-control form-control-lg ",{'is-invalid':errors.name})} placeholder="Name"
                                           value={this.state.name}
                                           onChange={this.onChange}
                                           name="name" />
                                    {errors.name && (<div className={'invalid-feedback'}>{errors.name}</div>)}
                                </div>
                                <div className="form-group">
                                    <input type="email" className={classnames("form-control form-control-lg ",{'is-invalid':errors.email})}
                                           onChange={this.onChange}
                                           value={this.state.email}
                                           placeholder="Email Address" name="email"/>
                                    {errors.email && (<div className={'invalid-feedback'}>{errors.email}</div>)}
                                    <small className="form-text text-muted">This site uses Gravatar so if you want a
                                        profile image, use a Gravatar email
                                    </small>
                                </div>
                                <div className="form-group">
                                    <input type="password" className={classnames("form-control form-control-lg ",{'is-invalid':errors.password})}
                                           value={this.state.password}
                                           onChange={this.onChange}
                                           placeholder="Password" name="password"/>
                                    {errors.password && (<div className={'invalid-feedback'}>{errors.password}</div>)}
                                </div>
                                <div className="form-group">
                                    <input type="password" className={classnames("form-control form-control-lg ",{'is-invalid':errors.cpassword})}
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

export default Register;