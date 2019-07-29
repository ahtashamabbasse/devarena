import React, {Component} from 'react';
import {connect} from "react-redux";
import TextField from "../common/TextField";
import InputField from "../common/InputField";
import SelectField from "../common/SelectField";
import TextArea from "../common/TextArea";
import {createProfile,getCurrentProfile} from '../../actions/profileAction'

class EditProfile extends Component {

    constructor(props) {
        super(props);
        this.state = {
            displaySocialInput: false,
            handle: "",
            company: "",
            website: "",
            location: "",
            status: "",
            skills: "",
            githubusername: "",
            bio: "",
            twitter: "",
            facebook: "",
            instagram: "",
            linkedin: "",
            youtube: "",
            errors: {},

        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }
    componentWillMount() {
        this.props.getCurrentProfile()
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            })
        }
        if (nextProps.profile.profile){
            const {profile}=nextProps.profile;
            console.log(profile)
            this.setState({
                handle:profile.handle,
                status:profile.status,
                company:profile.company,
                website:profile.website,
                location:profile.location,
                skills:profile.skills.toString(),
                githubusername:profile.githubusername,
                bio:profile.bio,
                facebook:profile.facebook,
                instagram:profile.instagram,
                twitter:profile.twitter,
                linkedin:profile.linkedin,
                youtube:profile.youtube,
            })
        }
    }

    onChange(e) {
        e.preventDefault();
        console.log(e.target.name);
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const profileData = {
            handle: this.state.handle,
            status: this.state.status,
            company: this.state.company,
            website: this.state.website,
            bio: this.state.bio,
            location: this.state.location,
            skills: this.state.skills,
            githubusername: this.state.githubusername,
            facebook: this.state.facebook,
            linkedin: this.state.linkedin,
            instagram: this.state.instagram,
            youtube: this.state.youtube,
            twitter: this.state.twitter,

        };

        this.props.createProfile(profileData,this.props.history)

    }


    render() {
        const {errors, displaySocialInput} = this.state;
        let socialInput;
        if (displaySocialInput) {
            socialInput = (
                <div>
                    <InputField
                        value={this.state.facebook}
                        name={'facebook'}
                        onChange={this.onChange}
                        placeholder={'Facebook Profile URL '}
                        icon={'fab fa-facebook'}
                        error={errors.facebook}
                    />
                    <InputField
                        value={this.state.twitter}
                        name={'twitter'}
                        onChange={this.onChange}
                        placeholder={'Twitter Profile URL '}
                        icon={'fab fa-twitter'}
                        error={errors.twitter}
                    />
                    <InputField
                        value={this.state.linkedin}
                        name={'linkedin'}
                        onChange={this.onChange}
                        placeholder={'linkedin Profile URL '}
                        icon={'fab fa-linkedin'}
                        error={errors.linkedin}
                    />
                    <InputField
                        value={this.state.instagram}
                        name={'instagram'}
                        onChange={this.onChange}
                        placeholder={'Instagram Profile URL '}
                        icon={'fab fa-instagram'}
                        error={errors.instagram}
                    />
                    <InputField
                        value={this.state.youtube}
                        name={'youtube'}
                        onChange={this.onChange}
                        placeholder={'youtube Profile URL '}
                        icon={'fab fa-youtube'}
                        error={errors.youtube}
                    />
                </div>


            )
        }

        const options = [
            {label: "* Select Professional Status", value: 0},
            {label: "Developer", value: "Developer"},
            {label: "Jr. Developer", value: "Jr. Developer"},
            {label: "Senior Developer", value: "Senior Developer"},
            {label: "Manager", value: "Manager"},
            {label: "Intern", value: "Intern"},
            {label: "Student", value: "Student"},
            {label: "Other", value: "Other"},

        ];
        return (
            <div className={'create-profile'}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className={'display-4 text-center'}>Edit your profile</h1>
                            <small className={'d-block pb-3'}>*= required fields</small>

                            <form onSubmit={this.onSubmit}>
                                <TextField
                                    name={'handle'}
                                    value={this.state.handle}
                                    placeholder={"* Profile handle"}
                                    onChange={this.onChange}
                                    error={errors.handle}
                                    info={'A unique handle for your profile URL. Your full name, company name and nickname etc'}
                                />


                                <SelectField
                                    options={options}
                                    name={'status'}
                                    value={this.state.status}
                                    onChange={this.onChange}
                                    error={errors.status}
                                    info={"Give us an idea what' you're in career"}
                                />

                                <TextField
                                    name={'company'}
                                    value={this.state.company}
                                    placeholder={"* Company"}
                                    onChange={this.onChange}
                                    error={errors.company}
                                    info={'Could be your own or one you work for '}
                                />

                                <TextField
                                    name={'website'}
                                    value={this.state.website}
                                    placeholder={"* Wbsiste"}
                                    onChange={this.onChange}
                                    error={errors.website}
                                    info={'Could be your own or one you work for '}
                                />

                                <TextField
                                    name={'location'}
                                    value={this.state.location}
                                    placeholder={"* Location"}
                                    onChange={this.onChange}
                                    error={errors.location}
                                    info={'City  & state suggested e.g Boston, MA'}
                                />
                                <TextField
                                    name={'skills'}
                                    value={this.state.skills}
                                    placeholder={"* Skills"}
                                    onChange={this.onChange}
                                    error={errors.skills}
                                    info={'Please use comma separated values HTML,CSS,node.JS,'}
                                />
                                <TextField
                                    name={'githubusername'}
                                    value={this.state.githubusername}
                                    placeholder={"* Github Username"}
                                    onChange={this.onChange}
                                    error={errors.githubusername}
                                    info={'If you want your latest 5 repo fetch  and a github link included '}
                                />
                                <TextArea
                                    name={'bio'}
                                    value={this.state.bio}
                                    placeholder={'Tell us about yourself'}
                                    info={'Tell us about yourself'}
                                    onChange={this.onChange}
                                    error={errors.bio}
                                />

                                <div className={'mb-3'}>
                                    <button
                                        type={'button'}
                                        className={'btn btn-light'}
                                        onClick={() => {
                                            this.setState(prevState => ({
                                                displaySocialInput: !prevState.displaySocialInput
                                            }))
                                        }}>
                                        Add Social Networks
                                    </button>
                                    <span className={'text-muted'}>Optional</span>
                                </div>
                                {socialInput}
                                <input type={'submit'} value={'Submit'} className={'btn btn-info btn-block'}/>

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
export default connect(mapStateToProps, {createProfile,getCurrentProfile})(EditProfile);