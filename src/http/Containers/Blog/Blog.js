import React from "react";
import { Route, Switch } from "react-router-dom";
import Posts from "../../Components/Posts/Posts";
import FullPost from "../../Components/FullPost/FullPost";
import NewPost from "../../Components/NewPost/NewPost";
class Blog extends React.Component {
    render() {
        return (
            <div>
                <Route path="/" exact component={Posts} />
                <Switch>
                    <Route path="/new" exact component={NewPost} />
                    <Route path="/:id" exact component={FullPost} />
                </Switch>
            </div>
        );
    }
}

export default Blog;
