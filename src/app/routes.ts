import { createBrowserRouter } from "react-router";
import { HomePage } from "./components/HomePage";
import { CaseStudy } from "./components/CaseStudy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/project/:slug",
    Component: CaseStudy,
  },
]);
