import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import TextField from "../common/TextField";
import TextArea from "../common/TextArea";
import {addEducation} from '../../actions/profileAction'

class AddEducation extends Component {

    constructor(props) {
        super(props);
        this.state = {
            institute: "",
            degree: "",
            fieldOfStudy: "",
            from: "",
            to: "",
            current: false,
            errors: {},
            disabled: false,
        };
        this.onCheck = this.onCheck.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onCheck(e) {
        e.preventDefault();
        this.setState({
            disabled: !this.state.disabled,
            current: !this.state.current
        });
        console.log("disabled ",this.state.disabled);
        console.log("current ",this.state.current)
    }

    onSubmit(e) {
        e.preventDefault();
        const newEducation={
            institute: this.state.institute,
            degree: this.state.degree,
            fieldOfStudy: this.state.fieldOfStudy,
            description: this.state.description,
            from: this.state.from,
            to: this.state.to,
            current: this.state.current,
        };
        this.props.addEducation(newEducation,this.props.history)

    }


    render() {
        const {errors} = this.state;
        console.log(errors)
        return (
            <div className={'add-experience'}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={'/dashboard'}>
                                Go back
                            </Link>
                            <h1 className={'display-4 text-center'}>Add Education </h1>
                            <p className="text-center lead">Add any Education that you had in past or current</p>

                            <form onSubmit={this.onSubmit}>

                                <TextField
                                    name={'institute'}
                                    value={this.state.institute}
                                    placeholder={"* Enter your institute name"}
                                    onChange={this.onChange}
                                    error={errors.institute}
                                />
                                <TextField
                                    name={'fieldOfStudy'}
                                    value={this.state.fieldOfStudy}
                                    placeholder={"* Enter Job fieldOfStudy"}
                                    onChange={this.onChange}
                                    error={errors.fieldOfStudy}
                                />
                                <TextField
                                    name={'degree'}
                                    value={this.state.degree }
                                    placeholder={"* Enter Degree "}
                                    onChange={this.onChange}
                                    error={errors.degree }
                                />
                                <h6>From Date</h6>
                                <TextField
                                    type={'date'}
                                    name={'from'}
                                    value={this.state.from}
                                    placeholder={"* from"}
                                    onChange={this.onChange}
                                    error={errors.from}
                                />
                                <h6>To Date</h6>
                                <TextField
                                    name="to"
                                    type="date"
                                    value={this.state.to}
                                    onChange={this.onChange}
                                    error={errors.to}
                                    disabled={this.state.disabled ? true : false}
                                />
                                <div className="form-check mb-4">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name="current"
                                        value={this.state.current}
                                        checked={this.state.current}
                                        onChange={this.onCheck}
                                        id="current"
                                    />
                                    <label htmlFor="current" className="form-check-label">
                                        Current Job
                                    </label>
                                </div>

                                <TextArea
                                    name={'description'}
                                    value={this.state.description}
                                    placeholder={'Tell us about your job'}
                                    info={'Tell us about your description'}
                                    onChange={this.onChange}
                                    error={errors.description}
                                />

                                <input type={'submit'} className={'btn btn-info btn-block mt-4'}/>

                            </form>

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
export default connect(mapStateToProps,{addEducation:addEducation})(withRouter(AddEducation));