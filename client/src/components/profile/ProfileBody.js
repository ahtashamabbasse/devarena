import React, {Component} from 'react';
import Moment from "react-moment";

class ProfileBody extends Component {
    render() {
        const {education, experience} = this.props;

        const expItem = experience.map((exp, index) =>
            (<li key={index} className="list-group-item">
                    <h4>{exp.company}</h4>
                    <p>
                        <Moment format={'YYYY/MM/DD'}>{exp.from}</Moment>
                        -
                        {exp.to === null ? ('Now') : <Moment format={'YYYY/MM/DD'}>{exp.to}</Moment>}
                    </p>
                    <p><strong>Position:</strong> {exp.title}</p>
                    <p><strong>Description:</strong> {exp.description}</p>
                </li>
            ));
        const eduItem = education.map((edu, index) =>
            (<li key={index} className="list-group-item">
                    <h4>{edu.institute}</h4>
                    <p>
                        <Moment format={'YYYY/MM/DD'}>{edu.from}</Moment>
                        -
                        {edu.to === null ? ('Now') : <Moment format={'YYYY/MM/DD'}>{edu.to}</Moment>}
                    </p>
                    <p><strong>Degree:</strong> {edu.degree}</p>
                    <p><strong>Field of study:</strong> {edu.fieldOfStudy}</p>
                    <p><strong>Description:</strong> {edu.description}</p>
                </li>
            ));

        return (
            <div className="row">
                <div className="col-md-6">
                    <h3 className="text-center text-info">Experience</h3>
                    {expItem.length > 0 ? (
                        <ul className="list-group">
                            {expItem}
                        </ul>
                    ) : (
                        <p className={'text-center'}>No Experience Listed</p>
                    )}
                </div>
                <div className="col-md-6">
                    <h3 className="text-center text-info">Education</h3>
                    {
                        eduItem.length > 0 ? (
                        <ul className="list-group">
                            {eduItem}
                        </ul>
                        ) : (
                        <p className={'text-center'}>No Education Listed</p>
                    )}
                </div>
            </div>
        );
    }
}

export default ProfileBody;