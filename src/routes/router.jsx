import { createBrowserRouter } from "react-router-dom";
import Categories from "../components/Categories/Categories";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Main from "../layout/Main";
import Login from "../components/LogIn/Login";
import Registration from "../components/Registration/Registration";

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
                path: '/categories',
                element: <Categories />
            },
            {
                path: '/product:id',
                element: <Categories />
            },
            {
                path: '/product-details:id',
                element: <ProductDetails />
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