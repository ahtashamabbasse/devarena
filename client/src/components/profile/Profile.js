import React, {Component} from 'react';
import {connect} from "react-redux";

import {getProfileByHandle} from '../../actions/profileAction'

class Profile extends Component {
    componentDidMount() {
        console.log(this.props);
        if (this.props.match.params.handle) {
            console.log("hitting");
            let handle = this.props.match.params.handle;
            this.props.getProfileByHandle(handle)
        }

    }

    render() {
        return (
            <div>


            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profile
})

export default connect(mapStateToProps, {getProfileByHandle})(Profile);