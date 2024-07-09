import {Header, Footer} from "@/layouts";
import {Home} from "@/pages";
import "./Layout.css";
import { createBrowserRouter } from "react-router-dom";
import About from "../pages/About/About";
import { RouterProvider } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
    
  },
  {
    path: "/about",
    element: <About />
  },
  {
  path: "/erreur404",
  element:<NotFound/>
}
])
const Layout = () => {
    return(
    <>
      <Header/>
      <RouterProvider router={router}/>
      <Footer/>
    </>
  );
}

export default Layout;