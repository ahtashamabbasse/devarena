import React, {Component} from 'react';
import isEmpty from "../../validations/isEmpty";

class ProfileHeader extends Component {
    render() {
        const profile = this.props.profile;
        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="card card-body bg-info text-white mb-3">
                            <div className="row">
                                <div className="col-4 col-md-3 m-auto">
                                    <img className="rounded-circle"
                                         src={profile.user.avatar}
                                         alt=""/>
                                </div>
                            </div>
                            <div className="text-center">
                                <h1 className="display-4 text-center">{profile.user.name.toUpperCase()}</h1>
                                <p className="lead text-center">{profile.status} at {isEmpty(profile.company)?null:(<span>{profile.company}</span>)}</p>
                                <p>{isEmpty(profile.profile)?null:(<span>{profile.profile}</span>)}</p>
                                <p>
                                    {console.log(profile)}
                                    {isEmpty(profile.website)?null:(
                                        <a className="text-white p-2" href={profile.website}>
                                            <i className="fas fa-globe fa-2x"/>
                                        </a>
                                    )}
                                    {isEmpty(profile.social) ? null :<span>
                                        {isEmpty(profile.social.twitter)?null:(
                                        <a className="text-white p-2" href={profile.twitter}>
                                        <i className="fab fa-twitter fa-2x"/>
                                        </a>
                                        )}
                                    {isEmpty(profile.social.facebook)?null:(
                                        <a className="text-white p-2" href={profile.facebook}>
                                        <i className="fab fa-facebook fa-2x"/>
                                        </a>
                                        )}

                                    {isEmpty(profile.social.linkedin)?null:(
                                        <a className="text-white p-2" href={profile.linkedin}>
                                        <i className="fab fa-linkedin fa-2x"/>
                                        </a>
                                        )}
                                    {isEmpty(profile.social.instagram)?null:(
                                        <a className="text-white p-2" href={profile.instagram}>
                                        <i className="fab fa-instagram fa-2x"/>
                                        </a>
                                        )}
                                    </span>}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileHeader;