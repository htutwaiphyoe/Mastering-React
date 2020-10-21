import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.Post} onClick={props.onClickHandler}>
            <h3>{props.post.title}</h3>
        </div>
    );
};
export default Post;
