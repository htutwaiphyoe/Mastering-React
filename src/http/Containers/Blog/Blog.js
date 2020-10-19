import React from "react";
import axios from "axios";
import Posts from "../../Components/Posts/Posts";
class Blog extends React.Component {
    state = {
        posts: [],
    };
    componentDidMount() {
        this.getPosts();
    }
    getPosts = async () => {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            console.log(response);
            this.setState({ posts: response.data.slice(0, 10) });
        } catch (e) {
            alert(e);
        }
    };
    render() {
        return (
            <div>
                <Posts posts={this.state.posts} />
            </div>
        );
    }
}

export default Blog;
