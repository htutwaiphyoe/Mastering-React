import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import classes from "./NewPost.module.css";
class NewPost extends React.Component {
    state = {
        title: "",
        body: "",
        submitted: false,
    };
    onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/posts", {
                title: this.state.title,
                body: this.state.body,
            });
            if (response.status === 201) {
                // this.setState({
                //     title: "",
                //     body: "",
                //     submitted: true,
                // });
                // this.props.history.push("/");
                this.props.history.replace("/");
            }
        } catch (e) {
            alert("Something went wrong!");
        }
    };
    onTitleChange = (e) => {
        this.setState({ title: e.target.value });
    };
    onBodyChange = (e) => {
        this.setState({ body: e.target.value });
    };
    render() {
        return (
            <div className={classes.NewPost}>
                {this.state.submitted ? <Redirect to="/" /> : null}
                <form onSubmit={this.onSubmitHandler}>
                    <input
                        type="text"
                        placeholder="Title"
                        onChange={this.onTitleChange}
                        value={this.state.title}
                    />
                    <textarea
                        placeholder="Body"
                        rows="5"
                        onChange={this.onBodyChange}
                        value={this.state.body}
                    />
                    <button type="submit">Add</button>
                </form>
            </div>
        );
    }
}

export default NewPost;
