import React, {Component} from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class PostItems extends Component {
    onDeletePost(id) {
        console.log("post id ", id)
    }

    render() {
        const {post, auth} = this.props;
        return (
            <div className="card card-body mb-3">
                <div className="row">
                    <div className="col-md-2">
                        <a href="/">
                            <img className="rounded-circle d-none d-md-block"
                                 src={post.avatar}
                                 alt=""/>
                        </a>
                        <br/>
                        <p className="text-center">{post.name}</p>
                    </div>
                    <div className="col-md-10">
                        <p className="lead">{post.text}</p>
                        <button type="button" className="btn btn-light mr-1">
                            <i className="text-info fas fa-thumbs-up"/>
                            <span className="badge badge-light">{post.likes.length}</span>
                        </button>
                        <button type="button" className="btn btn-light mr-1">
                            <i className="text-secondary fas fa-thumbs-down"/>
                        </button>
                        <Link to={`posts/${post._id}`} className="btn btn-info mr-1">
                            Comments
                        </Link>
                        {
                            post.user === auth.user.id ? (
                                <button onClick={this.onDeletePost.bind(this, post._id)} type="button"
                                        className="btn btn-danger mr-1">
                                    <i className="fas fa-times"/>
                                </button>
                            ) : (null)
                        }
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});
export default connect(mapStateToProps)(PostItems);