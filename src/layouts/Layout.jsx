// import {Header, Footer} from "@/layouts";
import "./Layout.css";
import {Home} from "@/pages";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import About from "../pages/About/About";
import NotFound from "../pages/NotFound/NotFound";
import Root from "./Root/Root";


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Root />,
    children: [
      {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />
    },
    {
      path: "/about",
      element: <About />
    },
      
    ],
    errorElement: <NotFound />  
  },

  {
    path: "/*",
    element: <NotFound />,
    errorElement: <NotFound/>

  }

])


const Layout = () => {
    return(
    <>
      {/* <Header /> */}
      <RouterProvider router={router}/>
      {/* <Footer/> */}
    </>
  );
}

export default Layout;

