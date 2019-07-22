import React, {Component} from 'react';
import {connect} from "react-redux";
import {getCurrentProfile} from "../../actions/profileAction";
import Spinner from "../common/spinner";
import {Link} from "react-router-dom";

class Dashboard extends Component {
    componentDidMount() {
        this.props.getCurrentProfile();
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.profile) {
            this.setState({
                profile: nextProps.profile
            })
        }
    }

    render() {
        const {user} = this.props.auth;
        const {profile, loading} = this.props.profile;
        let dashboardContent = ''
        if (profile === null || loading) {
            dashboardContent = <Spinner/>
        } else {
            if (Object.keys(profile).length > 0) {
                dashboardContent = <h1>Show Profile</h1>
            } else {
                dashboardContent=(
                    <div>
                        <p className="lead text-muted">Welcome {user.name},</p>
                        <p>You have not yet setup profile Please add some info</p>
                        <Link to={'/create-profile'} className={'btn btn-info btn-lg'} >Create Profile</Link>
                    </div>
                )
            }
        }


        return (
            <div className={'dashboard'}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="display-4">Dashboard</div>
                            {dashboardContent}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors,
    profile: state.profile
});
export default connect(mapStateToProps, {getCurrentProfile: getCurrentProfile})(Dashboard);