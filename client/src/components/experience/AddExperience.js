import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import TextField from "../common/TextField";
import TextArea from "../common/TextArea";


class AddExperience extends Component {

    constructor(props) {
        super(props);
        this.state = {
            company: "",
            title: "",
            description: "",
            location: "",
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

    }


    render() {
        const {errors} = this.state
        return (
            <div className={'add-experience'}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <Link to={'/dashboard'}>
                                Go back
                            </Link>
                            <h1 className={'display-4 text-center'}>Add Experience </h1>
                            <p className="text-center lead">Add any position or job that you had in past or current</p>

                            <form onSubmit={this.onSubmit}>

                                <TextField
                                    name={'company'}
                                    value={this.state.company}
                                    placeholder={"* Enter your Company name"}
                                    onChange={this.onChange}
                                    error={errors.company}
                                />
                                <TextField
                                    name={'title'}
                                    value={this.state.title}
                                    placeholder={"* Enter Job Title"}
                                    onChange={this.onChange}
                                    error={errors.title}
                                />
                                <TextField
                                    name={'location'}
                                    value={this.state.location}
                                    placeholder={"* Enter Job location"}
                                    onChange={this.onChange}
                                    error={errors.location}
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
export default connect(mapStateToProps)(withRouter(AddExperience));