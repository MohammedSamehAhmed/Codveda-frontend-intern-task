import { createBrowserRouter } from "react-router-dom";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Single from "./Components/Single/Single";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "Single/:id",
    element: <Single />,
  },
]);

export default myRoutes;
