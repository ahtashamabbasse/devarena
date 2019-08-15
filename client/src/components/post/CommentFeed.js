import React, {Component} from 'react';
import CommentItems from "./CommentItems";

class CommentFeed extends Component {


    render() {

        const {comments} = this.props;
        return comments.map(comment => {
            return <CommentItems key={comment._id} comment={comment}/>
        })
    }
}

export default CommentFeed;