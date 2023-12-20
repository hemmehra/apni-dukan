import { Layout } from "./components";
import { ContactUs, Home , PageNotFound} from './pages'
import { AboutUs } from './pages'
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
            path: "/about-us",
            element: <AboutUs/>
        },
        {
            path:'/contact-us',
            element: <ContactUs/>
        },
        {
          path:"*",
          element:<PageNotFound/>
        }
      ]
    }
])

export default router;