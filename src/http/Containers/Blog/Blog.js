import React from "react";
import { Route, Switch } from "react-router-dom";
import Posts from "../../Components/Posts/Posts";
import NewPost from "../../Components/NewPost/NewPost";
class Blog extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/new" component={NewPost} />
                    <Route path="/" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;
