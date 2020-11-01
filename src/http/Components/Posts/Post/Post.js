import React from "react";
import { withRouter } from "react-router-dom";
import classes from "./Post.module.css";

const Post = (props) => {
    const onPostClick = () => {
        props.history.push("/" + props.post.id);
    };
    return (
        <div className={classes.Post} onClick={onPostClick}>
            <h3>{props.post.title}</h3>
        </div>
    );
};
export default withRouter(Post);
