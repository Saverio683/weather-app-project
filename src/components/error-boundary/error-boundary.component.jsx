import React from "react";

import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './error-boundary.styles';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      console.error(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return (
            <ErrorImageOverlay>
                <ErrorImageContainer imageUrl='https://i.imgur.com/3suxlvm.png'/>
                <ErrorImageText>Oh no! We tripped up!</ErrorImageText>
            </ErrorImageOverlay>
        )
      }
  
      return this.props.children; 
    }
}

export default ErrorBoundary;