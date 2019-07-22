import React, {Component} from 'react';
import {connect} from "react-redux";
import {getCurrentProfile} from "../../actions/profileAction";

class Dashboard extends Component {

    componentDidMount() {
        this.props.getCurrentProfile();
    }
    componentWillReceiveProps(nextProps, nextContext) {

        if (this.props.profile.profile!==null){
            console.log(this.props.profile.profile)
        }
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>

            </div>
        );
    }
}
const mapStateToProps=(state)=>({
    auth: state.auth,
    errors: state.errors,
    profile:state.profile
});
export default connect(mapStateToProps,{getCurrentProfile:getCurrentProfile})(Dashboard);