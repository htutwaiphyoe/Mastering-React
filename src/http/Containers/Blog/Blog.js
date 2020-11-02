import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Posts from "../../Components/Posts/Posts";
import NewPost from "../../Components/NewPost/NewPost";
class Blog extends React.Component {
    state = {
        auth: true,
    };
    render() {
        return (
            <div>
                <Switch>
                    {this.state.auth ? (
                        <Route path="/new" exact component={NewPost} />
                    ) : (
                        <Redirect from="/new" to="/" />
                    )}
                    <Route path="/" component={Posts} />
                    <Route render={() => <h1>404 Not Found</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;
