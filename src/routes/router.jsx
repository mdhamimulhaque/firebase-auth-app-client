import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Main from "../layout/Main";
import Login from "../components/LogIn/Login";
import Registration from "../components/Registration/Registration";
import Category from "../components/Category/Category";
import Products from "../components/Products/Products";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/category/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`),
                element: <Category />
            },
            {
                path: '/products',
                loader: () => fetch('http://localhost:5000/products'),
                element: <Products />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registration',
                element: <Registration />
            },
        ]
    }
])