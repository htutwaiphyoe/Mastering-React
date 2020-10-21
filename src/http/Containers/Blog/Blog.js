import React from "react";
import axios from "axios";
import Posts from "../../Components/Posts/Posts";
import FullPost from "../../Components/FullPost/FullPost";
import NewPost from "../../Components/NewPost/NewPost";
class Blog extends React.Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,
    };
    componentDidMount() {
        this.getPosts();
    }

    onClickHandler = (id) => {
        this.setState({ selectedPostId: id });
    };
    getPosts = async () => {
        try {
            const response = await axios.get("/posts");

            this.setState({ posts: response.data.slice(0, 8) });
        } catch (e) {
            this.setState({ error: true });
        }
    };
    show() {
        if (this.state.error) {
            return (
                <div>
                    <p>Something went wrong!</p>
                </div>
            );
        }
        return (
            <div>
                <Posts posts={this.state.posts} onClickHandler={this.onClickHandler} />
                <FullPost id={this.state.selectedPostId} />
                <NewPost />
            </div>
        );
    }
    render() {
        return this.show();
    }
}

export default Blog;
