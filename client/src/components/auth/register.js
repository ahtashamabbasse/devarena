import React, {Component} from 'react';

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
        e.preventDefault()
        const newUser={
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            cpassword: this.state.cpassword,
        };
        console.log(newUser)

    };

    render() {
        return (

            <div className="register">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your DevArena account</p>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg" placeholder="Name"
                                           value={this.state.name}
                                           onChange={this.onChange}
                                           name="name" required/>
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-lg"
                                           onChange={this.onChange}
                                           value={this.state.email}
                                           placeholder="Email Address" name="email"/>
                                    <small className="form-text text-muted">This site uses Gravatar so if you want a
                                        profile image, use a Gravatar email
                                    </small>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg"
                                           value={this.state.password}
                                           onChange={this.onChange}
                                           placeholder="Password" name="password"/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-lg"
                                           value={this.state.cpassword}
                                           onChange={this.onChange}
                                           placeholder="Confirm Password" name="cpassword"/>
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