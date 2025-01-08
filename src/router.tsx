import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import FullScreenLoader from "./components/FullscreenLoader/FullscreenLoader";
import ErrorBoundary from "./ErrorBoundary";
import Layout from "./layout";

// Lazy load the page components
const Homepage = React.lazy(() => import("./pages/Homepage"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUs/AboutUsPage"));
const AboutUsLeaderPage = React.lazy(() => import("./pages/AboutUs/AboutUsLeaderPage"));
const WorkWithUs = React.lazy(() => import("./pages/LifeAtCorpus/WorkWithUs"));

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
    children: [
      {
        path:"",
        element: (
          <Suspense fallback={<FullScreenLoader />}>
            <Layout displayIsoCertification>
              <AboutUsPage />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "leaders",
        element: (
          <Suspense fallback={<FullScreenLoader />}>
            <Layout displayIsoCertification>
              <AboutUsLeaderPage />
            </Layout>
          </Suspense>
        ),
      },
    ]
  },
  {
    path: "/life-at-corpus",
    children : [
      {
        path: "work-with-us",
        element: (
          <Suspense fallback={<FullScreenLoader />}>
            <Layout displayIsoCertification>
              <WorkWithUs />
            </Layout>
          </Suspense>
        ),
      },
    ]
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
