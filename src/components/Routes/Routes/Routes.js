import { createBrowserRouter } from "react-router-dom";
import Category from "../../category/Category";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog";
import Courses from "../../pages/courses/Courses";
import Faq from "../../pages/Faq";
import Home from "../../pages/Home/Home";
import Login from "../../pages/login/login/Login";
import Register from "../../pages/login/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/course",
                element: <Courses></Courses>
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/faq",
                element: <Faq></Faq>
            },
            {
                path: "/category/:id",
                element: <Category></Category>
            },
            {
                path: "/course/:id",
                element: <Courses></Courses>
            }

        ]
    }

])