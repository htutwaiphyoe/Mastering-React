import React from "react";
import { Route } from "react-router-dom";
import Posts from "../../Components/Posts/Posts";
import FullPost from "../../Components/FullPost/FullPost";
import NewPost from "../../Components/NewPost/NewPost";
class Blog extends React.Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Posts} />
                <Route path="/new" exact component={NewPost} />
                <Route path="/:id" exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;
