import React from "react";

class ErrorBoundary extends React.Component {
    state = {
        hasError: false,
        errMsg: "",
    };

    componentDidCatch(error, info) {
        this.setState({ hasError: true });
    }
    render() {
        if (this.state.hasError) return <div>Something went wrong!</div>;
        return this.props.children;
    }
}

export default ErrorBoundary;
