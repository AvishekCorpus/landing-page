import { createBrowserRouter, Link } from "react-router-dom";
import React, { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary";
import Layout from "./layout";
import FullScreenLoader from "./components/FullscreenLoader/FullscreenLoader";

// Lazy load the page components
const Homepage = React.lazy(() => import("./pages/Homepage"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUsPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<FullScreenLoader />}>
        <Layout displayIsoCertification>
          <Homepage />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: "/about-us",
    element: (
      <Suspense fallback={<FullScreenLoader />}>
        <Layout displayIsoCertification>
          <AboutUsPage />
        </Layout>
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <ErrorBoundary>
        <div>Not Found</div>
      </ErrorBoundary>
    ),
  },
]);
