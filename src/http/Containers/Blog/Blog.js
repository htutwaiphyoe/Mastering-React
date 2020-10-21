import React from "react";
import axios from "axios";
import Posts from "../../Components/Posts/Posts";
import FullPost from "../../Components/FullPost/FullPost";
import NewPost from "../../Components/NewPost/NewPost";
class Blog extends React.Component {
    state = {
        posts: [],
        selectedPostId: null,
    };
    componentDidMount() {
        this.getPosts();
    }

    onClickHandler = (id) => {
        this.setState({ selectedPostId: id });
    };
    getPosts = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");

            this.setState({ posts: response.data.slice(0, 8) });
        } catch (e) {
            alert("Something went wrong!");
        }
    };
    render() {
        return (
            <div>
                <Posts posts={this.state.posts} onClickHandler={this.onClickHandler} />
                <FullPost id={this.state.selectedPostId} />
                <NewPost />
            </div>
        );
    }
}

export default Blog;
