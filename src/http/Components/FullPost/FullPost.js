import React, { Component } from "react";
import axios from "axios";
import classes from "./FullPost.module.css";
class FullPost extends Component {
    state = {
        post: null,
    };
    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.post || (this.props.id !== this.state.post.id && this.state.post)) {
                this.getPostData();
            }
        }
    }
    async getPostData() {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts/" + this.props.id
            );

            this.setState({ post: response.data });
        } catch (err) {
            alert("Something went wrong!");
        }
    }
    onDeleteHandler = async () => {
        try {
            await axios.delete("https://jsonplaceholder.typicode.com/posts/" + this.state.post.id);
        } catch (err) {
            alert("Something went wrong!");
        }
    };
    render() {
        let post = <p>Please select a post.</p>;
        if (this.state.post) {
            post = (
                <React.Fragment>
                    <h3>{this.state.post.title}</h3>
                    <p>{this.state.post.body}</p>
                    <button onClick={this.onDeleteHandler}>DELETE</button>
                </React.Fragment>
            );
        }
        return <div className={classes.FullPost}>{post}</div>;
    }
}

export default FullPost;
