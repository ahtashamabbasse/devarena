import React, {Component} from 'react';
import {connect} from "react-redux";
import {getProfiles} from '../../actions/profileAction'
import Spinner from "../common/spinner";

class Profile extends Component {

    componentWillMount() {
        this.props.getProfiles()
    }


    render() {
        const {profiles, loading} = this.props.profile;
        let profileItems;
        if (profiles === null || loading) {
            profileItems = <Spinner/>
        } else {
            if (profiles.length > 0) {
                profileItems = <h4>Profiles will be here</h4>
            } else {
                profileItems = <h4>No Profile Found . . .</h4>
            }

        }
        return (
            <div className={'profile'}>
                <div className={'container'}>
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="display-4 text-center">Developers Profile</h1>
                            <p className="text-center lead">Browse and connect with developers</p>
                            {profileItems}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile,
    errors: state.errors,

});
export default connect(mapStateToProps, {getProfiles})(Profile);