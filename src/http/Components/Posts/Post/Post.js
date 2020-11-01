import React from "react";
import { Link, withRouter } from "react-router-dom";
import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <Link to={`/${props.post.id}`} className={classes.Post}>
            <h3>{props.post.title}</h3>
        </Link>
    );
};
export default withRouter(Post);
