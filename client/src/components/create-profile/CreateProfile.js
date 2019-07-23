import React, {Component} from 'react';
import {connect} from "react-redux";
import TextField from "../common/TextFieldComponent";

class CreateProfile extends Component {

    constructor(props) {
        super(props);
        this.state={
            displaySocialInput:false,
            handle:"",
            company:"",
            website:"",
            location:"",
            status:"",
            skills:"",
            githubUsername:"",
            bio:"",
            twitter:"",
            facebook:"",
            instagram:"",
            linkedin:"",
            youtube:"",
            errors:{},

        }
    }


    render() {
        return (
            <div className={'create-profile'}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className={'display-4 text-center'}>Create your profile</h1>
                            <p className="lead text-center">
                                Let's get some information to make your profile stand out
                            </p>
                            <small className={'d-block pb-3'}>*= required fields</small>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state)=>({
   profile:state.profile,
   errors:state.errors,

});
export default connect(mapStateToProps)(CreateProfile);