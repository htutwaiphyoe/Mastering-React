import React from "react";
import Post from "./Post/Post";
import classes from "./Posts.module.css";
const Posts = (props) => {
    const posts = props.posts.map((post) => (
        <Post post={post} key={post.id} onClickHandler={() => props.onClickHandler(post.id)} />
    ));
    return <div className={classes.Posts}>{posts}</div>;
};

export default Posts;
