import { createBrowserRouter } from "react-router-dom";
import Category from "../../category/Category";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog";
import Courses from "../../pages/courses/Courses";
import Faq from "../../pages/Faq";
import Home from "../../pages/Home/Home";
import HomePage from "../../pages/HomePage";
import Login from "../../pages/login/login/Login";
import Register from "../../pages/login/Register/Register";
import DarkMode from "../../pages/Others/DarkMode";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                path: "/dark",
                element: <DarkMode></DarkMode>
            },

            {
                path: "/category/:id",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: "/course/:id",
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
            }

        ]
    }

])