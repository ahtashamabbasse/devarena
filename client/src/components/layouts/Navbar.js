import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {logoutUser} from "../../actions/authAction";
import {clearProfile} from "../../actions/profileAction";
import {connect} from "react-redux";

class Navbar extends Component {
    onLogoutClick = (e) => {
        e.preventDefault();
        console.log('done ');
        this.props.logoutUser();
        this.props.clearProfile()
    };

    render() {
        const {isAuthorized, user} = this.props.auth;
        const guestLink = (
            <ul className="navbar-nav ml-auto">

                <li className="nav-item">
                    <Link className="nav-link" to="/register">Sign Up</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </li>

            </ul>
        );

        const authLink = (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/feed">Feed</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#logout" onClick={this.onLogoutClick.bind(this)}>
                        <img src={user.avatar}
                             className={'rounded-circle'}
                             title={'You must have Gravatar connected to your email to display image'}
                             style={{'height': "25px", 'width': "25px", 'marginRight': "5px"}} alt={""}/>
                        Logout
                    </a>
                </li>
            </ul>
        );
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                    <Link className="navbar-brand" to="/">DevArena</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="mobile-nav">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={'/profiles'}> Developers
                                </Link>
                            </li>
                        </ul>
                        {isAuthorized ? authLink : guestLink}

                    </div>
                </div>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, {logoutUser, clearProfile})(Navbar);