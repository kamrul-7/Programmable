import { createBrowserRouter } from "react-router-dom";
import Category from "../../category/Category";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog";
import Course from "../../pages/courses/Course";
import Faq from "../../pages/Faq";
import Home from "../../pages/Home/Home";
import HomePage from "../../pages/HomePage";
import Login from "../../pages/login/login/Login";
import Register from "../../pages/login/Register/Register";
import Error from "../../pages/Others/Error";
import PrivateRoute from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/home',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/course')
            },
            {
                path: '/',
                element: <HomePage></HomePage>
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
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "/faq",
                element: <Faq></Faq>
            },


            {
                path: "/category/:id",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: "/course/:id",
                element: <PrivateRoute> <Course></Course></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            }

        ]
    }

])