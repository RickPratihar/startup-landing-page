import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home"; // folder default export is index.tsx
import Layout from "./Layout";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
// import About from "./pages/Home/About";
// import Contact from "./pages/Home/Contact";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // ✅ must be MainLayout
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <AboutUs />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
