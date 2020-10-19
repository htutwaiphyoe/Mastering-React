import React from "react";

const Post = (props) => {
    return (
        <div>
            <p>{props.post.title}</p>
            <p>{props.post.body}</p>
        </div>
    );
};
export default Post;
