import React, { Component } from "react";

class ErrorBoundry extends Component {
  // const [hasError, setHasError] = useState(false);
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <h1 className="tc">Opps...something went wrong</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry;