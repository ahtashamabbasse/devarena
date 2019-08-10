import React, {Component} from 'react';
import PostForm from "./PostForm";
import {connect} from "react-redux";
import {getPosts} from '../../actions/postAction'
import Spinner from "../common/spinner";
import PostItems from "./postItems";
import PostFeed from "./PostFeed";

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            post: {},
            loading: false
        }
    }


    componentDidMount() {
        this.props.getPosts()
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.post) {
            this.setState({
                posts:nextProps.post.posts
            })
        }

    }

    render() {
        const {posts, loading} = this.state;
        let content;
        if (posts === null || loading) {
            content = <Spinner/>
        } else {
            content = <PostFeed posts={posts}/>
        }
        return (
            <div className={'feed'}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <PostForm/>
                            {content}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        post: state.post
    }
};
export default connect(mapStateToProps, {getPosts})(Posts);