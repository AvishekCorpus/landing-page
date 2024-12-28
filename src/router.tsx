import { createBrowserRouter, Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Homepage from "./pages/Homepage";
import Layout from "./layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout displayIsoCertification><Homepage /></Layout>
  },
  {
    path: "*",
    element: (
      <ErrorBoundary>
        Not Found
      </ErrorBoundary>
    ),
  },
]);
