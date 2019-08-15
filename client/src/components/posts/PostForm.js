import React, {Component} from 'react';
import TextArea from "../common/TextArea";
import {connect} from "react-redux";
import {addPost} from '../../actions/postAction'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.errors){
            this.setState({
                errors:nextProps.errors
            })
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const newPost = {
            text: this.state.text
        };
        this.props.addPost(newPost)
        this.setState({
            text:''
        })
    }

    render() {
        const {errors} = this.state;
        return (
            <div>
                <div className="post-form mb-3">
                    <div className="card card-info">
                        <div className="card-header bg-info text-white">
                            Say Somthing...
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <TextArea
                                        placeholder={'Create a post'}
                                        onChange={this.onChange}
                                        value={this.state.text}
                                        name={'text'}
                                        error={errors.text}
                                    />
                                </div>
                                <button type="submit" className="btn btn-dark">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapToState = (state) => ({
    errors: state.errors
});

export default connect(mapToState, {addPost})(PostForm);