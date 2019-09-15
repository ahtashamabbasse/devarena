import React, {Component} from 'react';
import isEmpty from "../../validations/isEmpty";
import {Link} from "react-router-dom";

class ProfileItems extends Component {

    render() {
        const {profile} = this.props;
        return (
            <div className={'card card-body bg-light mb-3'}>
                <div className={'row'}>
                    <div className="col-2">
                        <img src={profile.user.avatar}  className={'rounded-circle'}  alt={profile.user.name}/>
                    </div>
                    <div className="col-lg-6 col-md-8 col-8">
                        {/*<h3>{profile.user.name}</h3>*/}
                        <p>
                            {profile.status} {!isEmpty(profile.company) ? (<span>at {profile.company}</span>) : null}
                        </p>
                        <p>
                            {!isEmpty(profile.location) ? (<span>at {profile.location}</span>) : null}
                        </p>
                        <Link to={`/profile/${profile.handle}`} className={'btn btn-info'}>View Profile</Link>
                    </div>
                    <div className="col-md-4 d-none d-md-block">
                        <h4>Skill Set</h4>
                        <ul className={'list-group'}>
                            {profile.skills.slice(0, 4).map((skill, index) => (
                                <li key={index} className={'list-group-item'}>
                                    <i className="fa fa-check pr-1"/>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileItems;