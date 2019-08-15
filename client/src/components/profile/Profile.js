import React, {Component} from 'react';
import {connect} from "react-redux";

import {getProfileByHandle} from '../../actions/profileAction'
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileGithub from "./ProfileGithub";
import ProfileBody from "./ProfileBody";
import Spinner from "../common/spinner";
import {Link} from "react-router-dom";

class Profile extends Component {
    
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.profile.profile===null && this.props.profile.loading){
            this.props.history.push('/not-found')
        }
    }

    componentDidMount() {
        if (this.props.match.params.handle) {
            let handle = this.props.match.params.handle;
            this.props.getProfileByHandle(handle)
        }

    }

    render() {
        const {profile, isLoading} = this.props.profile;
        let profileContent;
        if (profile === null || isLoading) {
            profileContent = (
                <Spinner/>
            )
        } else {
            profileContent = (
                <div>
                    <div className="row">
                        <div className={'col-md-6'}>
                            <Link to={'/profiles/'} className={'btn btn-light'}>Back to Profiles</Link>
                        </div>
                        <div className="col-md-6"/>

                    </div>
                    <ProfileHeader profile={profile}/>
                    <ProfileAbout profile={profile}/>
                    <ProfileBody education={profile.education} experience={profile.experience}/>
                    {
                        profile.githubusername?(
                        <ProfileGithub userName={profile.githubusername}/>
                    ):null}

                </div>
            )

        }
        return (
            <div className={'profile'}>
                <div className={'row'}>
                    <div className="col-md-12">
                        {profileContent}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile
});

export default connect(mapStateToProps, {getProfileByHandle})(Profile);