import React, {Component} from 'react';
import PostItems from "./postItems";

class PostFeed extends Component {
    render() {
        const {posts} = this.props;
        return posts.map(post => {
            return <PostItems key={post._id} post={post}/>
        })
    }
}

export default PostFeed;