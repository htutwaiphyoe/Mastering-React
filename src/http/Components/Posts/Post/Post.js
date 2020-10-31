import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <a href={`/posts/${props.post.id}`} className={classes.Post}>
            <h3>{props.post.title}</h3>
        </a>
    );
};
export default Post;
