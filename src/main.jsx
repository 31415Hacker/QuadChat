import React, { Component, useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

function HideSplash() {
  useEffect(() => {
    const splash = document.getElementById("app-loading");
    if (splash) splash.remove();
  }, []);
  return null;
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("QuadChat crashed:", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div className="fatal-error" role="alert">
          <h1>QuadChat hit a problem.</h1>
          <p>{String(this.state.error?.message || this.state.error)}</p>
          <button type="button" onClick={() => window.location.reload()}>
            Reload QuadChat
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <HideSplash />
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
