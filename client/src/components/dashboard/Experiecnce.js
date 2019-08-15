import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteExperience} from "../../actions/profileAction";
import Moment from "react-moment";

class Experience extends Component {
    onDelete(id) {
        this.props.deleteExperience(id)
    }

    render() {
        const experience = this.props.experience.map(exp => (
                <tr key={exp._id}>
                    <td>{exp.company}</td>
                    <td>{exp.title}</td>
                    <td>
                        <Moment format={'YYYY/MM/DD'}>{exp.from}</Moment>
                        -
                        {exp.to === null ? ('Now') : <Moment format={'YYYY/MM/DD'}>{exp.to}</Moment>}
                    </td>
                    <td>
                        <button onClick={this.onDelete.bind(this, exp._id)} className={'btn btn-danger'}>Delete</button>
                    </td>
                </tr>
            )
        );
        return (
            <div>
                <h4 className={'mb-4'}>Experience</h4>
                <table className={'table'}>
                    <thead>
                    <tr>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Years</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {experience}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
    errors: state.errors
});
export default connect(mapStateToProps, {deleteExperience})(Experience);