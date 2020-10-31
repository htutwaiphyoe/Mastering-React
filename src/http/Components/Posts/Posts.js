import React from "react";
import Post from "./Post/Post";
import jsonplaceholder from "../../../api/JsonPlaceholder";
import classes from "./Posts.module.css";
class Posts extends React.Component {
    state = {
        posts: [],

        error: false,
    };
    componentDidMount() {
        this.getPosts();
    }

    getPosts = async () => {
        try {
            const response = await jsonplaceholder.get("/posts");

            this.setState({ posts: response.data.slice(0, 12) });
        } catch (e) {
            this.setState({ error: true });
        }
    };
    render() {
        let posts = this.state.posts.map((post) => <Post post={post} key={post.id} />);
        if (this.state.error) {
            posts = <div>Oops! Something went wrong!</div>;
        }
        return <div className={classes.Posts}>{posts}</div>;
    }
}

export default Posts;
