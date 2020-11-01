import React, { Component } from "react";
import axios from "axios";
import classes from "./FullPost.module.css";
class FullPost extends Component {
    state = {
        post: null,
    };
    componentDidMount() {
        this.getPost(this.props.match.params.id);
    }
    async getPost(id) {
        try {
            const response = await axios.get("/posts/" + id);

            this.setState({ post: response.data });
        } catch (err) {
            alert("Something went wrong!");
        }
    }
    onDeleteHandler = async () => {
        try {
            await axios.delete("/posts/" + this.props.match.params.id);
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
