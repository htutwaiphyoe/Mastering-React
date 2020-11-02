import React from "react";
import { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Posts from "../../Components/Posts/Posts";
// import lazyComponent from "../../hoc/LazyComponent";
// const NewPost = lazyComponent(() => {
//     return import("../../Components/NewPost/NewPost");
// });
const NewPost = React.lazy(() => import("../../Components/NewPost/NewPost"));
class Blog extends React.Component {
    state = {
        auth: true,
    };
    render() {
        return (
            <div>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        {this.state.auth ? (
                            <Route path="/new" exact component={NewPost} />
                        ) : (
                            <Redirect from="/new" to="/" />
                        )}
                        <Route path="/" component={Posts} />
                    </Switch>
                </Suspense>
            </div>
        );
    }
}

export default Blog;
