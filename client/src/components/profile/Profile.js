import React, {Component} from 'react';
import {connect} from "react-redux";

import {getProfileByHandle} from '../../actions/profileAction'
import ProfileHeader from "./ProfileHeader";
import ProfileAbout from "./ProfileAbout";
import ProfileGithub from "./ProfileGithub";
import ProfileBody from "./ProfileBody";

class Profile extends Component {
    componentDidMount() {
        if (this.props.match.params.handle) {
            console.log("hitting");
            let handle = this.props.match.params.handle;
            this.props.getProfileByHandle(handle)
        }

    }

    render() {
        return (
            <div>


                <ProfileHeader/>
                <ProfileAbout/>
                <ProfileBody/>
                <ProfileGithub/>


            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile
});

export default connect(mapStateToProps, {getProfileByHandle})(Profile);