import React from "react";
import { Link } from "react-router-dom";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    // Update state to show fallback UI
    return { hasError: true, Error: error.message };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log the error to an error reporting service
    console.error("Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI
      return (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h1>Something went wrong.</h1>
          <p>We are working to fix this issue. Please try again later.</p>
          <Link to="/">Go to Home</Link>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
