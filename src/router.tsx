import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import FullScreenLoader from "./components/FullscreenLoader/FullscreenLoader";
import ErrorBoundary from "./ErrorBoundary";
import Layout from "./layout";
import DivisionPage from "./pages/DivisionPage";

// Lazy load the page components
const Homepage = React.lazy(() => import("./pages/Homepage"));
const AboutUsPage = React.lazy(() => import("./pages/AboutUs/AboutUsPage"));
const AboutUsLeaderPage = React.lazy(() => import("./pages/AboutUs/AboutUsLeaderPage"));
const WorkWithUs = React.lazy(() => import("./pages/LifeAtCorpus/WorkWithUs"));
const TrainingAndDevelopment = React.lazy(() => import("./pages/LifeAtCorpus/TrainingAndDevelopment"));
const LifeAtCorpus = React.lazy(() => import("./pages/LifeAtCorpus/index"));
const LifeAtCorpusTeam = React.lazy(() => import("./pages/LifeAtCorpus/LifeAtCorpusTeam"));
const EventPage = React.lazy(() => import("./pages/EventPage"));

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
        path: "leaders/:id",
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
        path: "index",
        element: (
          <Suspense fallback={<FullScreenLoader />}>
            <Layout displayIsoCertification>
              <LifeAtCorpus />
            </Layout>
          </Suspense>
        ),
      },
      {
        path: "team",
        element: (
          <Suspense fallback={<FullScreenLoader />}>
            <Layout displayIsoCertification>
              <LifeAtCorpusTeam />
            </Layout>
          </Suspense>
        ),
      },
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
      {
        path: "training",
        element: (
          <Suspense fallback={<FullScreenLoader />}>
            <Layout displayIsoCertification>
              <TrainingAndDevelopment />
            </Layout>
          </Suspense>
        ),
      },
    ]
  },
  {
    path : "events",
    element: (
      <Suspense fallback={<FullScreenLoader />}>
        <Layout displayIsoCertification>
          <EventPage />
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
  {
    path:"division/:name",
    element: (
      <Suspense fallback={<FullScreenLoader />}>
        <Layout displayIsoCertification>
          <DivisionPage />
        </Layout>
      </Suspense>
    ),
  }
]);
