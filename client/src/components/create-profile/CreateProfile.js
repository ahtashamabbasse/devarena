import React, {Component} from 'react';
import {connect} from "react-redux";

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
            <div>

            </div>
        );
    }
}

const mapStateToProps=(state)=>({
   profile:state.profile,
   errors:state.errors,

});
export default connect()(CreateProfile);