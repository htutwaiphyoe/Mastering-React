import React from "react";
import Post from "./Post/Post";
const Posts = (props) => {
    const posts = props.posts.map((post) => <Post post={post} key={post.id} />);
    return <div>{posts}</div>;
};

export default Posts;
