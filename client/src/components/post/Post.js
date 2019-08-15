import React, {Component} from 'react';
import {connect} from "react-redux";
import {getPost} from "../../actions/postAction";
import Spinner from "../common/spinner";
import PostItems from "../posts/postItems";
import {Link} from "react-router-dom";
import CommentForm from "./CommentForm";

class Post extends Component {
    componentDidMount() {
        let id = this.props.match.params.id;
        this.props.getPost(id)
    }

    render() {

        const {post, loading} = this.props.post;
        let postContent;
        if (post === null || loading || Object.keys(post).length < 0) {
            postContent=<Spinner/>
        }else {
            postContent=(
                <div>
                    <PostItems post={post} showAction={false} />
                    <CommentForm postId={post._id} />
                </div>
            )
        }

        return (
            <div className={'post'}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Link to={'/feed'} className={'btn btn-light mb-3'} >Back to Feed</Link>
                            {postContent}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    post: state.post
})

export default connect(mapStateToProps, {getPost})(Post);