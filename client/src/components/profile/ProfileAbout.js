import React, {Component} from 'react';
import isEmpty from "../../validations/isEmpty";

class ProfileAbout extends Component {
    render() {
        const profile = this.props.profile;

        const skills = profile.skills.map((skill,index) => {
            return (
                <div key={index} className="p-3">
                    <i className="fa fa-check"/> {skill}
                </div>
            )
        })
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-light mb-3">
                        <h3 className="text-center text-info">{profile.user.name}'s Bio</h3>
                        {profile.bio=null}
                        <p className="lead">{isEmpty(profile.bio) ? profile.user.name + " Doesn't have bio" : profile.bio}</p>
                        <hr/>
                        <h3 className="text-center text-info">Skill Set</h3>
                        <div className="row">
                            <div className="d-flex flex-wrap justify-content-center align-items-center">
                                {skills}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileAbout;