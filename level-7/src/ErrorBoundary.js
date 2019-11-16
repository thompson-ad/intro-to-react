// mostly code from the docs readtjs.org/docs/erorboundaries.html
// frequently there's errors from  APIs
// error boundaries are important to be defensive  about this
// componentDidCatch can help us with this
// NOTE - YOU CAN'T DO THIS WITH HOOKS
// ALSO NOTE - A COMPONENT CAN ONLUY CATCH ERRORS IN IT'S CHILDREN IT CANNOT CATCH IT'S OWN ERRORS - as such this will be a wrapper for details.js
// This error boundary since above a component and if there is an error it doesn something about it but if not it will just pass through

import React, {
    Component
} from "react";
import {
    Link
} from "@reach/router";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }

    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
    }

    componentWillUpdate() {
        if (this.state.hasError) {
            setTimeout(() => this.setState({
                redirect: true
            }), 5000);
        }
    }

    render() {
        if (this.state.hasError) {
            return ( <
                p > There was an error with this listing. < /p> <
                Link to = "/" > Click here < /Link> <
                p > to back to the home page or wait five seconds. < /p>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;

// now  anything that is a child component will have errors caught here
// this is almost like a try catch block
// A static method is one that can be called on the constructor 
// here we are calling ErrorBoundary.getDerivedStateFromError(error)
// if you want to call an error logging service, componentDidCatch would be an amazing place to do this
// Azure monintor, Sentry and TrackJS