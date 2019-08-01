import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteEducation} from "../../actions/profileAction";
import Moment from "react-moment";

class Education extends Component {
    onDelete(id) {
        this.props.deleteEducation(id)
    }

    render() {
        const education = this.props.education.map(exp => (
                <tr key={exp._id}>
                    <td>{exp.institute}</td>
                    <td>{exp.degree}</td>
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
                <h4 className={'mb-4'}>Education</h4>
                <table className={'table'}>
                    <thead>
                    <tr>
                        <th>Institute</th>
                        <th>Degree</th>
                        <th>Years</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {education}
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
export default connect(mapStateToProps, {deleteEducation})(Education);